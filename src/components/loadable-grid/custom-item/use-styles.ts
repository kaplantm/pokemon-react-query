import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  customItemRoot: {
    flex: 1,
    display: "flex",
    flexBasis: "33%",
  },
}));

export default useStyles;
