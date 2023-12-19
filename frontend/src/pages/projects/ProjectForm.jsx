import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import useStyles from "./styles";

const ProjectForm = ({ open, onClose, onCreate, onUpdate, initialData }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    time: "",
    status: "Pending",
  });
  useEffect(() => {
    // If initialData is provided, update the form data
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || "",
        time: initialData.time || "",
        status: initialData.status || "Pending",
      });
    } else {
      // If initialData is not provided, reset the form data
      setFormData({
        name: "",
        description: "",
        price: "",
        time: "",
        status: "Pending",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (initialData) {
      // If initialData is provided, it's an edit operation
      onUpdate(formData);
    } else {
      // Otherwise, it's a create operation
      onCreate(formData);
    }
    setFormData({
      name: "",
      description: "",
      price: "",
      time: "",
      status: "Pending",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {initialData ? "Edit Project" : "Create Project"}
      </DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Project Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Project Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          name="price"
          label="Project Price"
          variant="outlined"
          fullWidth
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          name="time"
          label="Project Time"
          variant="outlined"
          fullWidth
          value={formData.time}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {initialData ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectForm;
