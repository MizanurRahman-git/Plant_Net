import { Outlet } from "react-router";
import Navber from "../components/Shared/Navber/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
