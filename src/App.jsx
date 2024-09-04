import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Components from './pages/Components';
import CompTasks from './pages/CompTaks';
import Immer from "./pages/Immer";
<<<<<<< HEAD
import Loader from './Loader'

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set loading to true when the location changes
    setLoading(true);
    
    const handleComplete = () => {
      // Set loading to false when the navigation is done
      setLoading(false);
    };

    // Use a slight delay to simulate a loading effect
    const timeoutId = setTimeout(handleComplete, 300); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div>
      {loading && <Loader />}
      {children}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Navbar /><Home /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><Navbar /><About /></Layout>,
  },
  {
    path: '/components',
    element: <Layout><Navbar /><Components /></Layout>,
  },
  {
    path: '/comptask',
    element: <Layout><Navbar /><CompTasks /></Layout>,
  },
  {
    path: '/immer',
    element: <Layout><Navbar /><Immer /></Layout>,
  }
]);

const App = () => {
=======
import Github from "./pages/Github";
import Objects from "./pages/Objects";
import Hooks from "./pages/Hooks";

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
    },
    {
      path: '/github',
      element: <><Navbar /> <Github /></>
    },
    {
      path: '/object',
      element: <><Navbar /><Objects /></>
    },
    {
      path: '/hooks',
      element: <><Navbar /><Hooks /></>
    }
  ])

>>>>>>> 527d00e96b95c79efd21b583a85ee43db34e5a2c
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
