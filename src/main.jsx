import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


//REDUX
import { Provider } from "react-redux";
import store from "./app/store";

//REDUX PERSISTENCE....

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { BrowserRouter } from "react-router-dom";

const persistor = persistStore(store);

//ENVUELVE TODO PARA PONER INTERACTUAR
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);