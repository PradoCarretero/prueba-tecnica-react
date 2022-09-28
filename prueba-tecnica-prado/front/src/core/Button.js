import Fab from "@mui/material/Fab";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default function ButtonUi(props) {
  return (
    <Fab
      color={props.color}
      aria-label={props.label}
      style={{ width: 35, height: 30 }}
      onClick={props.functionOnClick}
    >
      {props.content}
    </Fab>
  );
}
ButtonUi.defaultProps = {
  color: "primary",
};

ButtonUi.propTypes = {
  functionOnClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};
