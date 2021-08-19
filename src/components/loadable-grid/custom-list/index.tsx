import { List } from "@material-ui/core";
import { forwardRef } from "react";
import { GridComponents } from "react-virtuoso";
import useStyles from "./use-styles";

const CustomList: GridComponents["List"] = forwardRef(
  ({ style, children }, listRef) => {
    const classes = useStyles();
    return (
      <List
        component="div"
        ref={listRef as any}
        style={{ padding: 0, ...style, margin: 0 }}
        // className={classes.customList}
      >
        {children}
      </List>
    );
    // return (
    //   <List
    //     component="div"
    //     ref={listRef as any}
    //     style={style}
    //     // className={classes.customList}
    //   >
    //     {children}
    //   </List>
    // );
  }
);

export default CustomList;
