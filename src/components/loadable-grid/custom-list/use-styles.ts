import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customList: {
      border: "1px solid green",
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

export default useStyles;
