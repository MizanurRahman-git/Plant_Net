import { Outlet } from "react-router";
import Navber from "../components/Shared/Navber/Navber";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
