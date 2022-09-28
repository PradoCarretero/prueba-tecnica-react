import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../components/App";

let div = null;
beforeEach(() => {
  div = document.createElement("div");
  document.body.appendChild(div);
});

afterEach(() => {
  unmountComponentAtNode(div);
  div.remove();
  div = null;
});

it("renders without crashing", () => {
  act(() => {
    render(
      <HashRouter>
        <App />
      </HashRouter>,
      div
    );
  });
});
