import * as api from "../api";

// Action Creators

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchProjects();

    dispatch({ type: "FETCH_PROJECTS", payload: data });

    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.createProject(project);
    console.log(JSON.stringify(data));
    dispatch({ type: "CREATE_PROJECT", payload: data });

    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.updateProject(id, project);
    dispatch({ type: "UPDATE_PROJECT", payload: data });

    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    await api.deleteProject(id);
    dispatch({ type: "DELETE_PROJECT", payload: id });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};
