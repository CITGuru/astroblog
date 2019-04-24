import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import { Route, Switch } from "react-router";
import Home from "./Views/Home";

import "./bootstrap.min.css";
import "./shards.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route render={() => <Home />} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
