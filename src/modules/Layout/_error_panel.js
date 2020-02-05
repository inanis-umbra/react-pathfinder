import PropTypes from "prop-types";
import React, {memo} from "react";
import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
const useErrorPanelStyles = makeStyles(theme => ({
  errorPanelSummary: {
    backgroundColor: theme.palette.error.main,
    textTransform: "uppercase"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    display: "inline-flex",
    marginRight: "auto",
    textTransform: "uppercase"
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(15),
    display: "inline-flex",
    color: theme.palette.text.secondary,
    width: "fit-content",
    textTransform: "uppercase"
  }
}));
function ErrorPanel(props) {
  const { error, errorInfo } = props;
  const classes = useErrorPanelStyles();
  return (
    <ExpansionPanel expanded={!!error}>
      <ExpansionPanelSummary className={classes.errorExpansion}>
        <Typography display="block" className={classes.heading}>
          Error:
        </Typography>
        <Typography
          display="block"
          className={classes.subHeading}
          color="secondary"
        >
          [Something went wrong.]
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ErrorPanel.propTypes = {
  error: PropTypes.object,
  errorInfo: PropTypes.object
}

export default memo(ErrorPanel);
