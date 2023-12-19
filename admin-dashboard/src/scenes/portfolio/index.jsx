import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";
import Header from "../../components/Header";

const Portfolio = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const columns = [
    { field: "id", headerName: "ID", hide: true },

    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "title-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: ({ row }) => (
        <img
          src={`${row.image}`}
          alt={row.title}
          style={{ width: "60%", height: "100px", objectFit: "cover" }}
        />
      ),
    },
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result.toString() });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fetchPortfolioItems = async () => {
    try {
      const response = await axios.get(
        "https://web-project-delta-eight.vercel.app/portfolio"
      );

      setPortfolioItems(response.data);
    } catch (error) {
      console.error("Error fetching portfolio items", error);
    }
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  useEffect(() => {
    console.log("Portfolio Items State:", portfolioItems);
  }, [portfolioItems]);

  const handleOpenCreateDialog = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
    });
    setCreateDialogOpen(true);
  };

  const handleCreate = async () => {
    try {
      await axios.post(
        "https://web-project-delta-eight.vercel.app/portfolio",
        formData
      );
      setCreateDialogOpen(false);
      fetchPortfolioItems();
    } catch (error) {
      console.error("Error creating portfolio item", error);
    }
  };

  const handleOpenUpdateDialog = (row) => {
    setFormData(row);
    setUpdateDialogOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://web-project-delta-eight.vercel.app/portfolio/${formData._id}`,
        formData
      );
      setUpdateDialogOpen(false);
      fetchPortfolioItems();
    } catch (error) {
      console.error("Error updating portfolio item", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://web-project-delta-eight.vercel.app/portfolio/${id}`
      );
      fetchPortfolioItems();
    } catch (error) {
      console.error("Error deleting portfolio item", error);
    }
  };

  return (
    <Box m="20px" style={{ height: "500px", overflow: "auto" }}>
      <Header title="PORTFOLIO" subtitle="Managing the Portfolio Items" />
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
          rows={portfolioItems}
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
          <DialogTitle>Create Portfolio Item</DialogTitle>
          <DialogContent>
            {/* Your form fields */}
            <TextField
              label="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
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
            <Button variant="contained" color="primary" component="label">
              Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImageChange(e)}
              />
            </Button>

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
          <DialogTitle>Update Portfolio Item</DialogTitle>
          <DialogContent>
            {/* Your form fields */}
            <TextField
              label="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
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
            <Button variant="contained" color="primary" component="label">
              Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImageChange(e)}
              />
            </Button>

            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Portfolio;
