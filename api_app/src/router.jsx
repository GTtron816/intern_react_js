import {Navigate,createBrowserRouter} from "react-router-dom";
import HPchars from "./HPchars";
import Chara from "./Chara";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/hp'} replace />,
  },
    {
      path: '/hp',
      element: <HPchars/>,
    },
    {
      path: '/chara',
      element: <Chara/>,
    },
  ]);