import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../components/hoc/RequireAuth";
import EntryPage from "../pages/EntryPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UpdateProfilePage from "../pages/UpdateProfilePage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <HomePage></HomePage>
      </RequireAuth>
    ),
  },
  {
    path: "/home",
    element: (
      <RequireAuth>
        <HomePage></HomePage>
      </RequireAuth>
    ),
  },
  {
    path: "/profile/:id",
    element: (
      <RequireAuth>
        <ProfilePage></ProfilePage>
      </RequireAuth>
    ),
  },
  {
    path: "/update_profile/:id",
    element: (
      <RequireAuth>
        <UpdateProfilePage></UpdateProfilePage>
      </RequireAuth>
    ),
  },
  { path: "/entry", element: <EntryPage></EntryPage> },
]);

export default routers;
