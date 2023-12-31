import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const ProductForm = lazy(() => import("../views/products/ProductForm.js"));
const ProductList = lazy(() => import("../views/products/ProductList.js"));
const ProductDetails = lazy(() =>
  import("../views/products/ProductDetails.js")
);
const LoginForm = lazy(() => import("../views/account/Login.js"));
const Search = lazy(() => import("../views/search.js/Search.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/login", exact: true, element: <LoginForm /> },
      { path: "/search", exact: true, element: <Search /> },
      { path: "/", element: <Navigate to="/products" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/add/product", exact: true, element: <ProductForm /> },
      {
        path: "/edit/product/:id",
        exact: true,
        element: <ProductForm />,
      },
      { path: "/products/user", exact: true, element: <ProductList /> },
      { path: "/products", exact: true, element: <ProductList /> },
      { path: "/product/:id", exact: true, element: <ProductDetails /> },
    ],
  },
];

export default ThemeRoutes;
