import Box from "@mui/material/Box";
import React, { Component } from "react";

export default function BoxUi(props) {
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>{props.children}</Box>
    </>
  );
}
