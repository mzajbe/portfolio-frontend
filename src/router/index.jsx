import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import ZDashboard from "../pages/dashboard/ZDashboard";
import Blogs from "../pages/blogs/Blogs";
import Resume from "../components/resume/Resume";
import PrivateRoute from "../pages/login/PrivateRoute";
import LoginPage from "../pages/login/LoginPage";


const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/projects',
                element:<Projects></Projects>,
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>,
            },
            {
                path:'/resume',
                element:<Resume></Resume>,
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>,
            },
            {
                path: "/zdashboard",
                element: (
                  <PrivateRoute>
                    <ZDashboard></ZDashboard>
                  </PrivateRoute>
                ),
              },
        ]
    }
])

export default router;