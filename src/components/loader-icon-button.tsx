import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, IconButton, IconButtonProps } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export type LoaderButtonProps = {
  loading?: boolean;
  children: React.ReactNode;
} & IconButtonProps;

const LoaderIconButtonComponent: React.FunctionComponent<LoaderButtonProps> = ({
  loading = false,
  children,
  color,
  disabled,
  ...props
}: LoaderButtonProps) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, "loaderButtonRoot")}>
      <div className={clsx(classes.wrapper, "loaderButtonWrapper")}>
        <IconButton color={color} disabled={loading || disabled} {...props}>
          {children}
        </IconButton>
        {loading && (
          <CircularProgress
            size={24}
            thickness={4}
            className={classes.buttonProgress}
            color={color === "primary" ? "secondary" : "primary"}
          />
        )}
      </div>
    </div>
  );
};

const LoaderIconButton = memo(LoaderIconButtonComponent);
export default LoaderIconButton;
