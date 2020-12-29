import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* <Route path="/logout" component={Logout} /> */}
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
