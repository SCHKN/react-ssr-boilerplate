import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        path: "/users",
        ...UsersListPage
      }
    ]
  }
];
