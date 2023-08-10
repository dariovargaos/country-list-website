import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const globalStyles = {
  styles: {
    global: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  },
};

const theme = extendTheme({ globalStyles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
