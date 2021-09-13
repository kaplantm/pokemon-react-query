import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  pageContainer: {
    flex: 1,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
