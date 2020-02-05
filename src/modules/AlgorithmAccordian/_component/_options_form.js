import React, { memo } from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import { default as OptionSwitch } from "./_option_switch";
import { useAccordianOptions } from "../_redux";
const useOptionFormStyles = makeStyles(theme => ({
  optionsForm: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(2)
  },
  optionsLabel: {
    color: theme.palette.primary.main,
    width: "100%"
  },
  optionsGroup: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column"
  },
  optionLabelControl: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

function OptionsForm() {
  const classes = useOptionFormStyles();
  const {
    title,
    options,
    selectedOptions,
    handleChangeOption
  } = useAccordianOptions();
  return (
    <FormControl className={classes.optionsForm} component="fieldset">
      <FormLabel className={classes.optionsLabel} component="legend">
        {title}
      </FormLabel>
      <FormGroup className={classes.optionsGroup}>
        {options && options.length
          ? options.map(option => (
              <OptionSwitch
                {...option}
                key={option.value}
                selectedOptions={selectedOptions}
                handleChangeOption={handleChangeOption}
                classes={classes}
              />
            ))
          : null}
      </FormGroup>
      <FormHelperText>Select Algorithm Runtime Parameters</FormHelperText>
    </FormControl>
  );
}

export default memo(OptionsForm);
