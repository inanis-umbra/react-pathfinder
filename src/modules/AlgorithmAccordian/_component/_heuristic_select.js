import React, { memo } from "react";
import { TextField, MenuItem, makeStyles } from "@material-ui/core";
import { useAccordianHeuristic } from "../_redux";
const useHeuristicStyles = makeStyles(theme => ({
  selectHeuristic: {
    width: "-webkit-fill-available",
    marginTop: theme.spacing(2)
  }
}));
function HeuristicSelect() {
  const {
    title,
    handleChangeHeuristic,
    heuristic,
    heuristicOptions
  } = useAccordianHeuristic();
  const classes = useHeuristicStyles();
  if (!heuristicOptions) {
    return null;
  }
  return (
    <TextField
      select
      margin="normal"
      fullWidth
      className={classes.selectHeuristic}
      label={title}
      placeholder={'Select Heuristic...'}
      value={heuristic || ""}
      SelectProps={{
        displayEmpty: true,
        onChange: handleChangeHeuristic
      }}
    >
      {heuristicOptions.map(heuristic => (
        <MenuItem key={heuristic.value} value={heuristic.value}>
          {heuristic.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default memo(HeuristicSelect);
