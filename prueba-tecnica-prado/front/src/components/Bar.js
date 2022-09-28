import Typography from "../core/Typography";
import Toolbar from "../core/Toolbar";
import AppBar from "../core/AppBar";
import React, { Component } from "react";

export default function Bar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant={"h6"} text={"Test React"} />
        </Toolbar>
      </AppBar>
    </>
  );
}
