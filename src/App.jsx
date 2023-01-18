import React from "react";
import { useState } from "react";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./Components/SignupPage/Signup";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/Login";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
        {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
  // const router =createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/home",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact/>
  //   },
  //   {
  //     path:"/signup",
  //     element: <Signup/>
  //   },
  //   {
  //     path: "/login",
  //     element: <Login/>
  //   }
  // ]);

  // return (
  //   <div className="App">
  //     <RouterProvider router={router}/>
  //   </div>
  // );
}

export default App;
