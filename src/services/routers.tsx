import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../components/hoc/RequireAuth";
import EntryPage from "../pages/EntryPage";
import HomePage from "../pages/HomePage";

const routers = createBrowserRouter([
  {
    path: "/home",
    element: (
      <RequireAuth>
        <HomePage></HomePage>
      </RequireAuth>
    ),
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <HomePage></HomePage>
      </RequireAuth>
    ),
  },
  { path: "/entry", element: <EntryPage></EntryPage> },
]);

export default routers;
