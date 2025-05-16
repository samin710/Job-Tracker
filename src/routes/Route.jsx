import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CompanyDetails from "../pages/CompanyDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Loading from "../components/Loading/Loading";
import ProfileDetails from "../pages/ProfileDetails";
import FAQ from "../pages/FAQ";
import ErrorPage from "../pages/ErrorPage ";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile ";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("/company.json"),
        Component: Home,
      },
      {
        path: "companyDetails/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("/company.json"),
        Component: CompanyDetails,
      },
      {
        path: "profileDetails",
        element: (
          <PrivateRoute>
            <ProfileDetails></ProfileDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        Component: FAQ,
      },
    ],
  },
  {
    path: "signUp",
    Component: SignUp,
  },
  {
    path: "signin",
    Component: SignIn,
  },
  {
    path: "forgetPassword",
    Component: ForgetPassword,
  },
  {
    path: "updateProfile",
    Component: UpdateProfile,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
