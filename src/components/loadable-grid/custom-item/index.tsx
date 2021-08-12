import { ListItem } from "@material-ui/core";
import useStyles from "./use-styles";

const CustomItem: React.FunctionComponent<any> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.customItem} component="div">
      {children}
    </ListItem>
  );
};

export default CustomItem;
