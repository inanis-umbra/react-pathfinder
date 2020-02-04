import React, { memo } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Checkbox,
  FormControlLabel,
  makeStyles
} from "@material-ui/core";

const usePanelStyles = makeStyles({
  root: {
    width: "100%"
  }
});

function AlgorithmPanel(props) {
  const { handleSelectAlgorithm, label, value, isSelected = false } = props;
  const classes = usePanelStyles();

  return (
    <ExpansionPanel expanded={isSelected}>
      <ExpansionPanelSummary>
        <FormControlLabel
          aria-label={value}
          onClick={handleSelectAlgorithm}
          control={<Checkbox name={value} />}
          label={label}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails></ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default memo(AlgorithmPanel);
