import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/core/reset.css";
import apiRequests from "../services/apiRequests";
import Bar from "./Bar";
import MainPaper from "./MainPaper";
import FormUser from "./FormUser";
import PageNotFound from "./PageNotFound";

export default function App() {
  const [usersData, setUsersData] = useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => getUsersData(), []);

  const getUsersData = () => {
    apiRequests.getApiData().then((dataApi) => {
      setUsersData(dataApi);
    });
  };

  const addUsersData = (newUserData) => {
    apiRequests.postApiData(newUserData).then((info) => {
      setUsersData([...usersData, info]);
    });
  };

  const deleteUsersData = () => {
    for (const id of selectionModel) {
      apiRequests.deleteApiData(id).then(getUsersData);
    }
  };

  const putUsersData = (id, mutateRow) => {
    apiRequests.putApiData(id, mutateRow).then(getUsersData);
  };

  const handleSelectionModel = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Bar />
              <div
                style={{
                  width: "60%",
                  margin: "0 auto",
                  marginTop: 50,
                }}
              >
                <MainPaper
                  handleClickOpen={handleClickOpen}
                  deleteUsersData={deleteUsersData}
                  addUsersData={addUsersData}
                  open={open}
                  handleClose={handleClose}
                  usersData={usersData}
                  selectionModel={selectionModel}
                  handleSelectionModel={handleSelectionModel}
                  putUsersData={putUsersData}
                />
              </div>
            </>
          }
        />

        <Route
          path="/form"
          element={
            <FormUser
              addUsersData={addUsersData}
              open={open}
              handleClose={handleClose}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
