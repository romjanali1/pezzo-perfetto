import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navebar from "../Pages/Shared/Navebar/Navebar";


const Main = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;