import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension-sol";

import App from "./App";
import PL2State from "./reducers";

const reduxState = createStore(
  PL2State,
  composeWithDevTools(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={reduxState}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
