import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: "*", element: <NotFound /> },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
