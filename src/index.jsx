import React from "react";
import { render } from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from "./Layout/Layout.jsx";

function Hello() {
  return(
    <div>
      <Layout />
    </div>
  );
}

render(<Hello />, document.getElementById("react-target"));