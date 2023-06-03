import React from "react";
import { render } from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from "./Layout/Layout.jsx";

function Create() {
  return(
    <div>
      <Layout />
    </div>
  );
}

render(<Create />, document.getElementById("react-target"));