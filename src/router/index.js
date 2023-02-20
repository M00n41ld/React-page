import About from "../pages/About";
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
// import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: "/about", element: <About />, exact: false},
    {path: "/posts", element: <Posts />, exact: true},
    {path: "/posts/:id", element: <PostIdPage />, exact: true},
    {path: '*', element:<Navigate to='/posts'/>}
]

export const publicRoutes = [
    {path: "/login", element: <Login />, exact: true},
    {path: '*', element:<Navigate to='/login'/>}
]