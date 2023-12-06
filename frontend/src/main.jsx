import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.css';
//import Interets from "./components/pages/Interets";

/* 
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/interets",
        element: <Interets />
      }
    ]
  }
]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
