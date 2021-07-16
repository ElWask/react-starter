import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#d2e6ea",
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  mainCard: {
    width: "500px",
    maxWidth: "80vw",
  },
  title: {
    fontSize: 23,
  },
  pos: {
    marginBottom: 12,
  },
}));
export default useStyles;
