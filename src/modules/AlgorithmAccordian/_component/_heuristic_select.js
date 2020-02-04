import React, { memo } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { heuristicOptions } from "../_redux";

function HeuristicSelect(props) {
  const { handleHeuristicChange, heuristic } = props;

  const Options = heuristicOptions.map(({ label, value }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));
  const renderSelectValue = (value) => !value ? 'Select Heuristic...' : heuristicOptions.find(heuristic => heuristic.value === value).label
  return (
    <TextField
      select
      label="Heuristic"
      value={heuristic}
      onChange={handleHeuristicChange}
      variant="filled"
      SelectProps={{
          displayEmpty: true,
          renderValue: renderSelectValue
      }}
    >
      {Options}
    </TextField>
  );
}

export default memo(HeuristicSelect);
