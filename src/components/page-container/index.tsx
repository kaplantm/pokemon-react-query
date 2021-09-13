import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./use-styles";

const PageContainer: React.FunctionComponent<{ children?: any }> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.pageContainer} maxWidth="lg">
      {children}
    </Container>
  );
};
export default PageContainer;
