import AppBar from "@material-ui/core/AppBar";
import React, { Component } from "react";

export default function AppBarUi(props) {
  return (
    <AppBar position="static" color="default">
      {props.children}
    </AppBar>
  );
}
