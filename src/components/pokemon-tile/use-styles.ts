import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  pokemonPaper: {
    // margin: 0,
    // padding: 0,
    // padding: theme.spacing(0.5),
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    minHeight: 200,
  },
  imgWrapper: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    margin: theme.spacing(3),
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.divider,
  },
}));

export default useStyles;
