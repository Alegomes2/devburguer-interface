import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "styled-components";

import AppProvider from "./hooks";
import { Router } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import { standardTheme } from "./styles/themes/standard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
