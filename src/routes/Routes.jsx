import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/home/Home";
import Colleges from "../pages/colleges/Colleges";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/myCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-college",
        element: <MyCollege />,
      },
    ],
  },
]);

export default router;
