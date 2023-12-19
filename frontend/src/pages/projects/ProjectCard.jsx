import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
} from "@material-ui/core";
import useStyles from "./styles";

const ProjectCard = ({ project, onDelete, onEdit, onDetails }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {project.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>

        {/* Status */}
        <Typography variant="subtitle2" className={classes.status}>
          {project.status}
        </Typography>

        {/* Edit and Delete buttons */}
        <div className={classes.buttons}>
          <Button size="small" color="primary" onClick={onDetails}>
            Details
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            Delete
          </Button>
          <Button size="small" color="primary" onClick={onEdit}>
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
