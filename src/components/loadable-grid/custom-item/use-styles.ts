import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customItem: {
      margin: 0,
      height: "200px",
      border: "1px solid red",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      // width: "25%",

      // [theme.breakpoints.down("sm")]: {
      //   width: "33.3%",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   width: "50%",
      // },
      // [theme.breakpoints.down("xs")]: {
      width: "100%",
      // },
    },
  })
);

export default useStyles;
