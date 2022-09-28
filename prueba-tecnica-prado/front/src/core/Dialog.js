import Dialog from "@mui/material/Dialog";
import React, { Component } from "react";

export default function DialogUi(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      {props.children}
    </Dialog>
  );
}
