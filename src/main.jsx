import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Enviar from './pages/Enviar'
import ListaEnvios from './pages/ListaEnvios'
import Produtos from './pages/Produtos'

import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/enviar",
    element: <Enviar />
  },
  {
    path: "/lista",
    element: <ListaEnvios />
  },
  {
    path: "/produtos",
    element: <Produtos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
