import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default function TypographyUi(props) {
  return (
    <Typography variant={props.variant} color={props.color} style={props.style}>
      {props.text}
    </Typography>
  );
}

TypographyUi.defaultProps = {
  color: "inherit",
};
TypographyUi.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
