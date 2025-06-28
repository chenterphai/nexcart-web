import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import HomePage from "../pages/HomePage";
import DrinkPage from "../pages/DrinkPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/drink", Component: DrinkPage },
    ],
  },
]);

export default router;
