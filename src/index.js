import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/NavBar";
import { BrowserRouter, Link, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);