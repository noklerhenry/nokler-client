import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import { Auth0Provider } from "@auth0/auth0-react";
import theme from "./Styles/theme";
import "@fontsource/anton/400.css";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Auth0Provider
      domain='nokler.us.auth0.com'
      clientId='Z0NS1usLidRY7BSA5rz1KPYU8MQalTvh'
      redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </React.StrictMode>
    </ChakraProvider>
  </Provider>,

  document.getElementById("root")
);
