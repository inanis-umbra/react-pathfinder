import PropTypes from "prop-types";
import React, { memo } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";


function OptionSwitch(props) {
  const { label, value, selectedOptions, handleChangeOption, classes } = props;
  const isSelected = selectedOptions.indexOf(value) !== -1;
  return (
    <FormControlLabel
      aria-label={value}
      className={classes.optionLabelControl}
      control={
        <Switch
          name={value}
          className={classes.optionSwitch}
          onClick={handleChangeOption}
          checked={isSelected}
          value={value}
        />
      }
      label={label}
    />
  );
}

OptionSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangeOption: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired
}

export default memo(OptionSwitch);
