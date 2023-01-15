import Home from "../pages/Home/Home";
import TemplateLogin from "../pages/Login";
import Page404 from "../pages/Page404/Page404";
import SignIn from "../components/SignIn";

const rutas = [
  {
    path: "/home",
    exact: true,
    page: Home,
  },
  {
    path: "/",
    exact: true,
    page: TemplateLogin,
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
