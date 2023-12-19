import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-my-team-96f315f6.vercel.app",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//Auth

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);

//Projects

export const createProject = (newProject) =>
  API.post("/projects", { newProject });

export const updateProject = (id, updatedProject) =>
  API.patch(`/projects/${id}`, updatedProject);

export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const fetchProjects = () => API.post("/projects/get/");
