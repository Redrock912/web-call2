import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contact from "./components/contact";
import Owner from "./components/owner";
import NotFound from "./components/notfound";
import * as serviceWorker from "./serviceWorker";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Client
          </NavLink>
        </li>
        <li>
          <NavLink to="/owner">Owner</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* Switch로 404 페이지 뜰 때 NotFound를 불러온다. */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/owner" component={Owner} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
