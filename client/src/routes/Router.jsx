import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import UpdatePage from "../pages/UpdatePage";
import CreatePage from "../pages/CreatePage";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/viewDetails/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/create",
        element: <CreatePage></CreatePage>,
      },
      {
        path: "/update/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/api/products/${params.id}`),
      },
    ],
  },
]);

export default router;
