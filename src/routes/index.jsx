import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import { AboutPage, HomePage, ProjectPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectPage /> },
    ],
  },
]);

export default router;
