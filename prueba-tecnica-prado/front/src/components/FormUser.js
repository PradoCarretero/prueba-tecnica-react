import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import ButtonPlane from "../core/ButtonPlane";
import Typography from "../core/Typography";
import TextField from "../core/TextField";
import DialogContentText from "../core/DialogContentText";
import DialogContent from "../core/DialogContent";
import DialogTitle from "../core/DialogTitle";
import DialogActions from "../core/DialogActions";
import Dialog from "../core/Dialog";

export default function FormDialog(props) {
  const [newUserData, setNewUserData] = useState({
    name: "",
    lastName: "",
    age: "",
    email: "",
  });

  const [errorMessageText, seterrorMessageText] = useState("");

  const cleanInputData = () => {
    setNewUserData({
      id: "",
      name: "",
      lastName: "",
      age: "",
      email: "",
    });
  };

  const requestData =
    newUserData.name !== "" &&
    newUserData.lastName !== "" &&
    newUserData.age !== "" &&
    newUserData.email !== "";

  const conditionalLink = requestData ? "/" : "";

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.id;
    const newUserDataInput = {
      ...newUserData,
      [inputChanged]: inputValue,
    };
    setNewUserData(newUserDataInput);
  };

  const errorMessage = () => {
    if (newUserData.name === "") {
      seterrorMessageText("Por favor indique el nombre del nuevo usuario");
    } else if (newUserData.lastName === "") {
      seterrorMessageText("Por favor indique el apellido del nuevo usuario");
    } else if (newUserData.age === "") {
      seterrorMessageText("Por favor indique la edad del nuevo usuario");
    } else if (newUserData.email === "") {
      seterrorMessageText("Por favor indique el email del nuevo usuario");
    }
  };
  const handleButtonAddUser = () => {
    if (requestData) {
      props.addUsersData(newUserData);
      props.handleClose();
      cleanInputData();
    } else {
      errorMessage();
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle content={"Nuevo usuario"} />
        <DialogContent>
          <DialogContentText
            content={"Por favor, rellene los campos del nuevo usuario"}
          />
          <TextField
            id={"name"}
            label={"Nombre de usuario"}
            type={"name"}
            handleInput={handleInput}
            value={newUserData.name}
          />
          <TextField
            id={"lastName"}
            label={"Apellidos"}
            type={"lastName"}
            handleInput={handleInput}
            value={newUserData.lastName}
          />
          <TextField
            id={"age"}
            label={"Edad"}
            type={"age"}
            handleInput={handleInput}
            value={newUserData.age}
          />
          <TextField
            id={"email"}
            label={"email"}
            type={"email"}
            handleInput={handleInput}
            value={newUserData.email}
          />
        </DialogContent>
        <DialogActions>
          <Typography
            text={errorMessageText}
            style={{ color: "red" }}
            variant={"subtitle2"}
          />
          <Link to={`/`} title="volver">
            <ButtonPlane
              functionOnClick={props.functionOnClick}
              content={"Cancel"}
              label={"Cancel"}
            />
          </Link>
          <Link to={conditionalLink} title="volver">
            <ButtonPlane
              functionOnClick={handleButtonAddUser}
              content={"Añadir"}
              label={"Add"}
            />
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  addUsersData: PropTypes.func.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};
