import {Navigate,createBrowserRouter} from "react-router-dom";
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/'} replace />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);