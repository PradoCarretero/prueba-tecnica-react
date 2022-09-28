import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageSave from "./MessageSave";
import Box from "../core/Box";
import DataGrid from "../core/DataGrid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Edad",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    editable: true,
    width: 220,
  },
];

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.name?.trim() === "") {
            reject(
              new Error("Error al guardar al usuario: el campo está vacío")
            );
          } else {
            resolve({ ...user });
          }
        }, 200)
      ),
    []
  );
};

export default function DataGridUsers(props) {
  const rows = props.usersData;

  const mutateRow = useFakeMutation();

  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    async (newRow) => {
      const cleanNewRow = {
        name: newRow.name,
        lastName: newRow.lastName,
        age: newRow.age,
        email: newRow.email,
      };
      props.putUsersData(newRow.id, cleanNewRow);
      const response = await mutateRow(newRow);
      setSnackbar({ children: "Usuario guardado", severity: "success" });
      return response;
    },
    [mutateRow]
  );

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: "error" });
  }, []);

  return (
    <>
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          selectionModel={props.selectionModel}
          onSelectionModelChange={props.handleSelectionModel}
          handleProcessRowUpdateError={handleProcessRowUpdateError}
          processRowUpdate={processRowUpdate}
        />{" "}
        {!!snackbar && (
          <MessageSave onClose={handleCloseSnackbar} snackbar={snackbar} />
        )}
      </Box>
    </>
  );
}

DataGridUsers.defaultProps = {
  usersData: [],
};

DataGridUsers.propTypes = {
  usersData: PropTypes.array.isRequired,
  putUsersData: PropTypes.func.isRequired,
};
