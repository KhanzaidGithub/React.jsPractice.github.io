import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import Components from './pages/Components'
import CompTasks from './pages/CompTaks'
import Immer from "./pages/Immer";

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /> <Home /></>
    },
    {
      path: '/about',
      element: <><Navbar /> <About /></>
    },
    {
      path: '/components',
      element: <><Navbar /> <Components /></>
    },
    {
      path: '/comptask',
      element: <><Navbar /> <CompTasks /></>
    },
    {
      path: '/immer',
      element: <><Navbar /> <Immer /></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
