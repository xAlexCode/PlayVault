import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './src/pages/RootLayout';
import Home from './src/pages/Home';
import GamePage from './src/pages/GamePage';
import NewGamePage from './src/pages/NewGamePage';
import GameDetailPage from './src/pages/GameDetailPage';
import EditGamePage from './src/pages/EditGamePage';
import NotFoundPage from './src/pages/NotFoundPage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "games", Component: GamePage },
      { path: "games/new", Component: NewGamePage },
      { path: "games/:id", Component: GameDetailPage },
      { path: "games/:id/edit", Component: EditGamePage },
      { path: "*", Component: NotFoundPage }

    ],
  },
]);


const Router = () => {
  return <RouterProvider router={router} />
}

export default Router