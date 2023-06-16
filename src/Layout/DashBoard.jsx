import { NavLink, Outlet } from "react-router-dom";
import {FaHome, FaNotesMedical, FaRegStickyNote} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
 

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open  ">
        <Helmet>
            <title>Sutter Camp | Dashbaord</title>
        </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#8e9490]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <li>
            <NavLink to="/dashboard/mySelectedClasses">
            <FaNotesMedical></FaNotesMedical> My Selected Class
            </NavLink>
          </li>
          <li>
            <NavLink  to="/dashboard/myEnrolledClasses">
              <FaRegStickyNote></FaRegStickyNote> My Enrolled Class
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;


 