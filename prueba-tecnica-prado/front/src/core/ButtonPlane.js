import Button from "@mui/material/Button";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default function ButtonPlaneUi(props) {
  return (
    <Button aria-label={props.label} onClick={props.functionOnClick}>
      {props.content}
    </Button>
  );
}

Button.propTypes = {
  functionOnClick: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
};
