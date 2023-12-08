import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import ErrorPage from "./components/ErrorPage.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
// Context
import { UserProvider } from "./context/user/UserContext.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import { ProductProvider } from "./context/product/ProductContext.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </UserProvider>
);
