import { createBrowserRouter } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Cart, Home, Login, Menu, Register } from "../containers";

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
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <>
      <Cart />,
      <Footer />
      </>
    ),
  },
]);
