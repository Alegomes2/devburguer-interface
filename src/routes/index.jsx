import { createBrowserRouter } from "react-router-dom";

import { Home } from "../containers/Home";
import { Login } from "../containers/Login";
import { Menu } from "../containers/Menu";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Menu />,
  },
]);
