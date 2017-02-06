import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "mobx-react";

import { TimerStore } from "./stores";

import App from "./containers/App";
import TimerView from "./containers/TimerView";

const timerStore = new TimerStore();
const rootStores = {
    "timerStore": timerStore
};

ReactDOM.render(
  <Provider {...rootStores} >
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={TimerView} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('root')
);