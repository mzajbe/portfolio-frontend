import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;