import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";

import toast, { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </FirebaseProvider>
  </React.StrictMode>
);
