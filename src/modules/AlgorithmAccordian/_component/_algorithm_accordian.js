import React, { memo } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { useAccordians } from "../_redux";
import { default as AlgorithmPanel } from "./_algorithm_panel";

const useAlgorithmAccordianStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    maxHeight: "100vh",
    height: "fit-content",
    width: "calc(100vw / 3)",
    opacity: 0.7
  }
}));

function AlgorithmAccordian() {
  const classes = useAlgorithmAccordianStyles();
  const { accordians, selected, handleSelectAlgorithm } = useAccordians();
  if (!accordians || !accordians.length) {
    return null;
  }

  return (
    <Paper className={classes.root}>
      {accordians.map(({ label, value }) => (
        <AlgorithmPanel
          selectedAlgorithm={selected}
          handleSelectAlgorithm={handleSelectAlgorithm}
          key={value}
          label={label}
          value={value}
        />
      ))}
    </Paper>
  );
}

export default memo(AlgorithmAccordian);
