import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      padding: theme.spacing(0.5),
      width: "33%",
      display: "flex",
      flex: "none",
      alignContent: "stretch",

      // @media (max-width: 1024px) {
      //   width: 50%
      // },

      // @media (max-width: 480px) {
      //   width: 100%
      // },
    },
    itemWrapper: {
      flex: 1,
      textAlign: "center",
      fontSize: "80%",
      padding: theme.spacing(1),
      border: "1px solid red",
      whiteSpace: "nowrap",
    },
    listContainer: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

export default useStyles;
