import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./component/Root";
import HomePage from "./component/HomePage";
import CollectionPage from "./component/CollectionPage";
import Cart from "./component/Cart";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <CollectionPage /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
