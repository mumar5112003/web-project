import React, { useState, useEffect } from "react";
import { Container, Button, Grid, Typography, Paper } from "@material-ui/core";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../../actions/projects";
import { updateProject } from "../../actions/projects"; // Import your updateProject action
import ProjectDetails from "./ProjectDetails";
import useStyles from "./styles";

const Projects = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { projects, isLoading } = useSelector((state) => state.projects);

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleCreateProject = async (newProject) => {
    try {
      dispatch(createProject(newProject));
      setShowProjectForm(false);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setShowProjectForm(true);
  };

  const handleUpdateProject = async (updatedProject) => {
    try {
      dispatch(updateProject(selectedProject._id, updatedProject));
      setShowProjectForm(false);
      setSelectedProject(null);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      dispatch(deleteProject(projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  const handleCloseProjectDetails = () => {
    setShowProjectDetails(false);
    setSelectedProject(null);
  };

  const handleOpenProjectForm = () => {
    setShowProjectForm(true);
  };

  const handleCloseProjectForm = () => {
    setShowProjectForm(false);
    setSelectedProject(null);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Your Projects
      </Typography>

      {!projects.length === 0 && !isLoading ? (
        <Typography variant="h5" className={classes.noProjects}>
          You have no projects.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item key={project._id} xs={12} sm={6} md={4} lg={3}>
              <ProjectCard
                project={project}
                onEdit={() => handleEditProject(project)}
                onDelete={() => handleDeleteProject(project._id)}
                onDetails={() => handleOpenProjectDetails(project)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenProjectForm}
        className={classes.addButton}
      >
        Create Project
      </Button>

      {/* Project Form */}
      <ProjectForm
        open={showProjectForm}
        onClose={handleCloseProjectForm}
        onCreate={handleCreateProject}
        onUpdate={handleUpdateProject}
        initialData={selectedProject}
      />
      <ProjectDetails
        open={showProjectDetails}
        onClose={handleCloseProjectDetails}
        project={selectedProject}
      />
    </Container>
  );
};

export default Projects;
