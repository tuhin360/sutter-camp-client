import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Instructors from "../pages/Instructors/Instructors";
import DashBoard from "../Layout/DashBoard";
import MySelectedClasses from "../pages/DashBoard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/DashBoard/MyEnrolledClasses/MyEnrolledClasses";
import AllClass from "../pages/AllClass/AllClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "allClass",
        element: <AllClass></AllClass>
      }
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage></NotFoundPage>,
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'mySelectedClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'myEnrolledClasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      }
     
    ]
  },
]);
