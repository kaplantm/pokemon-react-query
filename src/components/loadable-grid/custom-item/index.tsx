import { ListItem } from "@material-ui/core";
import { memo } from "react";
import useStyles from "./use-styles";

const CustomItem: React.FunctionComponent<any> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <ListItem classes={{ root: classes.customItemRoot }} component="div" {...props} style={{ margin: 0 }}>
      {children}
    </ListItem>
  );
};

export default memo(CustomItem);
