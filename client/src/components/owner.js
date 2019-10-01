import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const Own = ({ match }) => <p>{match.params.id}</p>;

class Owner extends Component {
  render() {
    const { url } = this.props.match;
    console.log(this.props);

    return (
      <div>
        <h1>Owner</h1>
        <strong>Select</strong>
        <ul>
          <li>
            <Link to="/owner/1">Owner 1</Link>
          </li>
          <li>
            <Link to="/owner/2">Owner 2</Link>
          </li>
          <li>
            <Link to="/owner/3">Owner 3</Link>
          </li>
        </ul>
        <Route path="/owner/:id" component={Own} />
      </div>
    );
  }
}

export default Owner;
