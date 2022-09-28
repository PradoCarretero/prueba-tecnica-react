import Snackbar from "@mui/material/Snackbar";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";

export default function SnackbarUi(props) {
  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={props.onClose}
      autoHideDuration={6000}
    >
      <Alert {...props.snackbar} onClose={props.handleCloseSnackbar} />
    </Snackbar>
  );
}

SnackbarUi.propTypes = {
  onClose: PropTypes.func.isRequired,
};
