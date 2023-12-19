import React from "react";
import { Modal, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

const ProjectDetails = ({ open, onClose, project }) => {
  const classes = useStyles();

  if (!project) {
    // Handle the case where 'project' is null
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.modalContainer}>
          <Typography variant="h5">No Project Selected</Typography>
          <Typography variant="body2" color="textSecondary">
            Select a project to view details.
          </Typography>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modalContainer}>
        <Typography variant="h5">{project.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {project.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Time: {project.time}
        </Typography>

        {/* Add more project details here as needed */}

        <Button variant="outlined" color="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
