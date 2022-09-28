import TextField from "@mui/material/TextField";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default function TextFieldUi(props) {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.id}
      label={props.label}
      type={props.type}
      fullWidth
      variant="standard"
      onChange={props.handleInput}
      value={props.value}
    />
  );
}

TextFieldUi.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
