import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokemonPaper: {
      padding: theme.spacing(0.5),
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
    },
  })
);

export default useStyles;
