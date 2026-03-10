import { createBrowserRouter } from "react-router-dom";

import Private from "./Private";

import LoginPage from "../pages/login/LoginPage";
import LandingPage from "../layout/LandingPage";

import UserManagementPage from "../pages/user-management/UserManagementPage";
import UserAccounts from "../pages/user-management/user-account/UserAccounts";
import UserRoles from "../pages/user-management/user-role/UserRoles";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Private Render={LandingPage} />,
    children: [
      {
        path: "/user-management",
        element: <UserManagementPage />,
        children: [
          {
            path: "/user-management/user-account",
            element: <UserAccounts />,
          },
          {
            path: "/user-management/user-role",
            element: <UserRoles />,
          },
        ],
      },
    ],
  },
]);
