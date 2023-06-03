import React from "react";
import { render } from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from "./Layout/Layout.jsx";

function Home() {
  return(
    <div>
      <Layout>
        {/* Ingresa tus componentes aqui */}
      </Layout>
    </div>
  );
}

render(<Home />, document.getElementById("react-target"));