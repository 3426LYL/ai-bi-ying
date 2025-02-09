import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { store, persistor } from "./store/index.js";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/index.js";
createRoot(document.getElementById("root")).render(
  // <StrictMode>  //严格模式
  <Provider store={store} persistor={persistor}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
          }}
        >
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
  // </StrictMode>,
);
