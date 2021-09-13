import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  navContainer: {
    padding: theme.spacing(3),
    zIndex: 100,
    borderBottom: theme.palette.action.active,
    boxShadow: theme.shadows[10],
  },
}));

export default useStyles;
