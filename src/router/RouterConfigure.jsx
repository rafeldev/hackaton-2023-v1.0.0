import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import SignIn from "../pages/SignIn/SignIn";

const rutas = [
  // {
  //   path: "/",
  //   exact: true,
  //   page: Home,
  // },
  {
    path: "/",
    exact: true,
    page: SignIn,
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
