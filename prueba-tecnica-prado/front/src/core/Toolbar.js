import Toolbar from "@material-ui/core/Toolbar";
import React, { Component } from "react";

export default function ToolbarUi(props) {
  return <Toolbar>{props.children}</Toolbar>;
}
