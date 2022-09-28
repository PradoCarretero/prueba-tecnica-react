import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";

export default function PaperUi(props) {
  return <Paper>{props.children}</Paper>;
}
