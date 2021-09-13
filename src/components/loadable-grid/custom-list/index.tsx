import { Box, CircularProgress, List, Typography } from "@material-ui/core";
import { forwardRef, memo } from "react";
import PageContainer from "../../page-container";
import useStyles from "./use-styles";

const CustomList: React.FunctionComponent<any> = forwardRef((props, listRef) => {
  const { style, children, fullyLoaded, isFetchingNextPage } = props as any;
  const classes = useStyles();
  return (
    <PageContainer>
      {/* !important dont mess wit the style here or virtuoso does weird flickering things */}
      <List component="div" ref={listRef as any} style={{ padding: 0, ...style, marginTop: 0 }} className={classes.listContainer}>
        {children}
      </List>

      <Box display="flex" justifyContent="center" flex={1} mb={1} mt={1} minHeight={20}>
        {isFetchingNextPage && <CircularProgress size={25} />}
      </Box>

      {fullyLoaded && <Typography align="center">Thats all folks!</Typography>}
    </PageContainer>
  );
});

export default memo(CustomList);
