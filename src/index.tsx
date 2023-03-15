import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Keycloak, { KeycloakInstance } from "keycloak-js";

let keycloak: KeycloakInstance = Keycloak("./resources/KeycloakAuth.json");

keycloak
  .init({ onLoad: "login-required" })
  .success((authenticated) => {
    console.log(keycloak);
    console.log(authenticated);
    if (!authenticated) {
      window.location.reload();
    } else {
      console.info("Authenticated");
    }

    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );

    sessionStorage.setItem("authentication", keycloak.token!);
    sessionStorage.setItem("refreshToken", keycloak.refreshToken!);

    setTimeout(() => {
      keycloak
        .updateToken(70)
        .success((refreshed) => {
          if (refreshed) {
            console.debug("Token refreshed" + refreshed);
          } else {
            console.warn(
              "Token not refreshed, valid for " +
                Math.round(
                  (keycloak.tokenParsed?.exp ?? 0) +
                    (keycloak.timeSkew ?? 0) -
                    new Date().getTime() / 1000
                ) +
                " seconds"
            );
          }
        })
        .error(() => {
          console.error("Failed to refresh token");
        });
    }, 60000);
  })
  .error(() => {
    console.error("Authenticated Failed");
  });

reportWebVitals();
