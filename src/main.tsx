<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
>>>>>>> logIn
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import ToastContextProvider from "./Context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
=======
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> logIn
