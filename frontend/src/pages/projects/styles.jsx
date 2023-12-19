import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  status: {
    marginTop: theme.spacing(1),
  },
  buttons: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    outline: "none",
  },
  noProjects: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
