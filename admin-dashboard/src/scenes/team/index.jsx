import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import API from "../../api";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    position: "",
    image: "", // Add this line for image
  });

  const columns = [
    { field: "id", headerName: "ID", hide: true },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <img
            src={`${row.image}`}
            alt={row.name}
            style={{ width: "50px", height: "50px" }}
          />
        );
      },
    },

    {
      field: "position",
      headerName: "Position",
      flex: 1,
      renderCell: ({ row: { position } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {position}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenUpdateDialog(row)}
              style={{
                margin: theme.spacing(1),
                padding: theme.spacing(0),
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              Update
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDelete(row._id)}
              style={{ margin: theme.spacing(1), padding: theme.spacing(1) }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      setFormData({ ...formData, image: reader.result.toString() });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await API.get("/team");

      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members", error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    console.log("Team Members State:", teamMembers);
  }, [teamMembers]);

  const handleOpenCreateDialog = () => {
    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      accessLevel: "",
    });
    setCreateDialogOpen(true);
  };

  const handleCreate = async () => {
    try {
      await API.post("/team", formData);
      setCreateDialogOpen(false);
      fetchTeamMembers();
    } catch (error) {
      console.error("Error creating team member", error);
    }
  };

  const handleOpenUpdateDialog = (row) => {
    setFormData(row);
    setUpdateDialogOpen(true);
  };
  const handleUpdate = async () => {
    try {
      await API.put(`/team/${formData._id}`, formData);
      setUpdateDialogOpen(false);
      fetchTeamMembers();
    } catch (error) {
      console.error("Error updating team member", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/team/${id}`);
      fetchTeamMembers();
    } catch (error) {
      console.error("Error deleting team member", error);
    }
  };

  return (
    <Box m="20px" style={{ height: "500px", overflow: "auto" }}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenCreateDialog}
        >
          Create
        </Button>

        <DataGrid
          checkboxSelection
          rows={teamMembers}
          columns={columns}
          onSelectionModelChange={(newSelection) =>
            setSelectedRows(newSelection.selectionModel)
          }
          getRowId={(row) => row._id}
          pageSize={5}
          autoHeight
        />

        {/* Create Dialog */}
        <Dialog
          open={isCreateDialogOpen}
          onClose={() => setCreateDialogOpen(false)}
        >
          <DialogTitle>Create Team Member</DialogTitle>
          <DialogContent>
            {/* Your form fields */}
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" component="label">
              Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImageChange(e)}
              />
            </Button>

            <TextField
              label="Position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              fullWidth
              margin="normal"
            />

            <Button variant="contained" color="primary" onClick={handleCreate}>
              Create
            </Button>
          </DialogContent>
        </Dialog>

        {/* Update Dialog */}
        <Dialog
          open={isUpdateDialogOpen}
          onClose={() => setUpdateDialogOpen(false)}
        >
          <DialogTitle>Update Team Member</DialogTitle>
          <DialogContent>
            {/* Your form fields */}
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" component="label">
              Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImageChange(e)}
              />
            </Button>

            <TextField
              label="Position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              fullWidth
              margin="normal"
            />

            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Team;
