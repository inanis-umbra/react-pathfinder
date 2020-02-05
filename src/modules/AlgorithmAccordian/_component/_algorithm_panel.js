import PropTypes from "prop-types";
import React, { memo } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Typography
} from "@material-ui/core";
import { default as HeuristicSelect } from "./_heuristic_select";
import { default as OptionsForm } from "./_options_form";
import { default as SelectedAlgorithm } from "@material-ui/icons/AccountTree";
import { default as ClosedAlgorithm } from "@material-ui/icons/AccountTreeTwoTone";

const usePanelStyles = makeStyles(theme => ({
  algorithmPanel: {
    width: "100%"
  },
  algorithmSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "-webkit-fill-available",
    backgroundColor: theme.palette.secondary.dark
  },
  algorithmDetails: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "-webkit-fill-available",
    flexDirection: "column"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    display: "inline-flex",
    marginRight: "auto"
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(15),
    display: "inline-flex",
    color: theme.palette.text.secondary,
    width: "fit-content"
  }
}));

function AlgorithmPanel(props) {
  const { handleSelectAlgorithm, label, value, selectedAlgorithm } = props;
  const classes = usePanelStyles();
  const isSelected = Boolean(
    selectedAlgorithm && value === selectedAlgorithm.id
  );
  return (
    <ExpansionPanel
      className={classes.algorithmPanel}
      onChange={handleSelectAlgorithm(value)}
      expanded={isSelected}
    >
      <ExpansionPanelSummary
        expandIcon={isSelected ? (<SelectedAlgorithm />) : (<ClosedAlgorithm />)}
        className={classes.algorithmSummary}
      >
        <Typography display="block" className={classes.heading}>
          {label}
        </Typography>
        <Typography
          display="block"
          className={classes.subHeading}
          color="secondary"
        >
          {isSelected ? "[Selected]" : ""}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.algorithmDetails}>
        <HeuristicSelect />
        <OptionsForm />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

AlgorithmPanel.propTypes = {
  handleSelectAlgorithm: PropTypes.func,
  label: PropTypes.string.isRequired,
  selectedAlgorithm: PropTypes.any,
  value: PropTypes.string.isRequired
};

export default memo(AlgorithmPanel);
