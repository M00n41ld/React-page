import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../../router";
import { AuthContext } from "../context";
import MyLoader from "./Loader/MyLoader";


const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)
  if (isLoading) {
    return <MyLoader />
  }

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} element={route.element} path={route.path} exact={route.exact} />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} element={route.element} path={route.path} exact={route.exact} />
        )}
      </Routes>
  )
}

export default AppRouter;

