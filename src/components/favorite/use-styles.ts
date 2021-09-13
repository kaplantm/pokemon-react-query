import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  favorite: {
    fontSize: "4rem",
    margin: theme.spacing(2),
    color: "tomato",
  },
}));

export default useStyles;
