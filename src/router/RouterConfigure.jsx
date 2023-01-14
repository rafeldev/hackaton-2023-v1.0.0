import Home from "../pages/Home";
import Page404 from "../pages/Page404";

const rutas = [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",
    page: Page404,
  },
];

// const rutasError = [
//   {
//     path: "*",
//     page: Page404,
//   },
// ];

export { rutas };
