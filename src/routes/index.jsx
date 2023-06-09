import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import { HomePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
