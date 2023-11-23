import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";
import {
  About,
  AccommodationsList,
  DetailsAccommodation,
  ErrorPage,
  Home,
  Layout,
} from "../pages/index";

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
        path: ROUTER_CONFIG.ACCOMMODATIONS,
        element: <AccommodationsList />,
      },
      {
        path: ROUTER_CONFIG.ACCOMMODATIONS_SEARCH,
        element: <AccommodationsList />,
      },
      {
        path: ROUTER_CONFIG.ACCOMMODATION,
        element: <DetailsAccommodation />,
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
