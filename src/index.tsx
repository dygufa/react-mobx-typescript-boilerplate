import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";


import { TimerStore } from "./stores";

import App from "./containers/App";
import TimerView from "./containers/TimerView";

const routingStore = new RouterStore();
const timerStore = new TimerStore();
const rootStores = {
    timerStore: timerStore,
    routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...rootStores} >
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={TimerView} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('root')
);