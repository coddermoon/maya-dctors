import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Appoinment from "../pages/Appoinment/Appoinment";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Appoinment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }
    ],
  },
]);

export default router;
