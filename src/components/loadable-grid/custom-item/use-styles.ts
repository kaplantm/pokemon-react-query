import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customItem: {
      // height: "220px",
      // border: "1px solid red",
      // margin: 0,
      // padding: 0,
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "stretch",
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
