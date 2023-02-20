import { createBrowserRouter } from "react-router-dom";
import EntryPage from "../pages/EntryPage";
import HomePage from "../pages/HomePage";


const routers = createBrowserRouter([
  { path: "/home", element: <HomePage></HomePage> },
  { path: "/", element: <HomePage></HomePage> },
  { path: "/entry", element: <EntryPage></EntryPage> },
 
]);

export default routers;
