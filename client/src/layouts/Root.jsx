import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
