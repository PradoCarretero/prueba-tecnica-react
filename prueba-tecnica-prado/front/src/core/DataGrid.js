import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default function DataGridUi(props) {
  return (
    <DataGrid
      inputProps={{ "data-testid": "grid" }}
      rows={props.rows}
      columns={props.columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      selectionModel={props.selectionModel}
      onSelectionModelChange={props.onSelectionModelChange}
      processRowUpdate={props.processRowUpdate}
      onProcessRowUpdateError={props.handleProcessRowUpdateError}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}

DataGridUi.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  selectionModel: PropTypes.array.isRequired,
  onSelectionModelChange: PropTypes.func.isRequired,
  processRowUpdate: PropTypes.func.isRequired,
  handleProcessRowUpdateError: PropTypes.func.isRequired,
};
