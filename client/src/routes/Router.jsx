import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import UpdatePage from "../pages/UpdatePage";
import CreatePage from "../pages/CreatePage";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";

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
        path: "/create",
        element: <CreatePage></CreatePage>,
      },
      {
        path: "/update",
        element: <UpdatePage></UpdatePage>,
      },
    ],
  },
]);

export default router;
