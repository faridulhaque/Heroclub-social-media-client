import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const routers = createBrowserRouter([
  { path: "/home", element: <HomePage></HomePage> },
  { path: "/", element: <HomePage></HomePage> },
  { path: "/sign_in", element: <SignInPage></SignInPage> },
  { path: "/sign_up", element: <SignUpPage></SignUpPage> },
]);

export default routers;
