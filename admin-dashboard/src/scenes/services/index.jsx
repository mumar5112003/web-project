import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";

import Header from "../../components/Header";

const Services = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [servicesData, setServicesData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, hide: true },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpenUpdateDialog(row)}
            style={{ margin: theme.spacing(1) }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(row._id)}
            style={{ margin: theme.spacing(1) }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const fetchServicesData = async () => {
    try {
      const response = await axios.get(
        "https://backend-my-team-96f315f6.vercel.app/services"
      );

      setServicesData(response.data);
    } catch (error) {
      console.error("Error fetching services data", error);
    }
  };

  useEffect(() => {
    fetchServicesData();
  }, []);

  const handleOpenCreateDialog = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
    });
    setCreateDialogOpen(true);
  };

  const handleCreate = async () => {
    try {
      await axios.post(
        "https://backend-my-team-96f315f6.vercel.app/services",
        formData
      );
      setCreateDialogOpen(false);
      fetchServicesData();
    } catch (error) {
      console.error("Error creating service", error);
    }
  };

  const handleOpenUpdateDialog = (row) => {
    setFormData(row);
    setUpdateDialogOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://backend-my-team-96f315f6.vercel.app/services/${formData._id}`,
        formData
      );
      setUpdateDialogOpen(false);
      fetchServicesData();
    } catch (error) {
      console.error("Error updating service", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backend-my-team-96f315f6.vercel.app/services/${id}`
      );
      fetchServicesData();
    } catch (error) {
      console.error("Error deleting service", error);
    }
  };

  return (
    <Box m="20px">
      <Header
        title="SERVICES"
        subtitle="List of Services for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenCreateDialog}
        >
          Create
        </Button>

        <DataGrid
          rows={servicesData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={5}
          getRowId={(row) => row._id}
        />

        {/* Create Dialog */}
        <Dialog
          open={isCreateDialogOpen}
          onClose={() => setCreateDialogOpen(false)}
        >
          <DialogTitle>Create Service</DialogTitle>
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
              label="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
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
          <DialogTitle>Update Service</DialogTitle>
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
              label="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
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

export default Services;
