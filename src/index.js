import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import allReducers from "./reducers";

const store = createStore(allReducers);

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#282828"
    },
    primary: {
      main: "#98971a"
    },
    secondary: {
      main: "#d79921"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
