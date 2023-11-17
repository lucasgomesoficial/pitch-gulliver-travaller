import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, ErrorPage, About } from "../pages/index";
import { ROUTER_CONFIG } from "../config/constants";

const router = createBrowserRouter([
  {
    path: ROUTER_CONFIG.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER_CONFIG.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_CONFIG.ABOUT,
        element: <About />,
      },
      {
        path: ROUTER_CONFIG.MY_FAVORITE,
        element: <h1>meus favoritos</h1>,
      },
    ],
  },
]);

export function Route() {
  return <RouterProvider router={router} />;
}