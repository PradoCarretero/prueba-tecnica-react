import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "../core/Typography";
import ButtonPlane from "../core/ButtonPlane";

export default function PageNotFound() {
  return (
    <div>
      <Typography variant={"h6"} text={"Página no encontrada"} />
      <Link to={`/`} title="volver">
        <ButtonPlane content={"Volver a la página de inicio"} label={"Home"} />
      </Link>
    </div>
  );
}
