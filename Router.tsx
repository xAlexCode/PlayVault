import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './src/pages/RootLayout';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: test },
    ],
  },
]);


const Router = () => {
  return <RouterProvider router={router} />
}

export default Router