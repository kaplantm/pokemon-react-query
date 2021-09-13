import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  statsContainer: {
    margin: theme.spacing(3),
  },
  statLine: {
    display: "flex",
    alignItems: "space-between",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: "dodgerblue",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  statLabel: {
    fontWeight: 800,
    color: "powderblue",
  },
  statValue: {
    fontWeight: 800,
    color: "white",
  },
}));

export default useStyles;
