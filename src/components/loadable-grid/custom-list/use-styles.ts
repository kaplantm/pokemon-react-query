import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  listContainer: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

export default useStyles;
