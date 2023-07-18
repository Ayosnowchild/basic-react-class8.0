import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Func from "../Func";
import Form from "../form";
import State from "../State";
import Condition from "../Condition";
import ErrorPage from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <State /> },
      {
        path: "/func",
        element: <Func />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/con",
        element: <Condition />,
      },
    ],
  },
]);
