import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import Button from "../core/Button";
import Typography from "../core/Typography";
import Paper from "../core/Paper";
import AddIcon from "../core/AddIcon";
import DeleteIcon from "../core/DeleteIcon";

export default function MainPaper(props) {
  return (
    <Paper>
      <div
        style={{
          minHeight: 200,
          padding: 25,
        }}
      >
        <Typography
          text={"Listado de usuarios"}
          variant={"title"}
          style={{ display: "inline" }}
        />{" "}
        <Link to={`/form`} title="ir a formulario">
          <Button
            content={<AddIcon />}
            functionOnClick={props.handleClickOpen}
            label={"Add"}
          />
        </Link>
        <Button
          content={<DeleteIcon />}
          functionOnClick={props.deleteUsersData}
          label={"Delete"}
        />
      </div>
      <Grid
        usersData={props.usersData}
        selectionModel={props.selectionModel}
        handleSelectionModel={props.handleSelectionModel}
        putUsersData={props.putUsersData}
      />
    </Paper>
  );
}
