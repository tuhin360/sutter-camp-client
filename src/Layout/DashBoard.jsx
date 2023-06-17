import { NavLink, Outlet } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaHome,
  FaNotesMedical,
  FaRegStickyNote,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin base on Data
  // const isAdmin = true;
  // const isInstructor = true;

  const [isAdmin] = useAdmin();

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
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manage">
                  <FaChalkboardTeacher></FaChalkboardTeacher> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/mySelectedClasses">
                  <FaNotesMedical></FaNotesMedical> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myEnrolledClasses">
                  <FaRegStickyNote></FaRegStickyNote> My Enrolled Class
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
            </>
          )}

          {/* {isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/manage">
                  <FaChalkboardTeacher></FaChalkboardTeacher>  Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers></FaUsers> My Class
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/mySelectedClasses">
                  <FaNotesMedical></FaNotesMedical> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myEnrolledClasses">
                  <FaRegStickyNote></FaRegStickyNote> My Enrolled Class
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
