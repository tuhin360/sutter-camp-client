import { NavLink, Outlet } from "react-router-dom";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHome,
  FaNotesMedical,
  FaRegStickyNote,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
 
  const [isInstructor] = useInstructor();
  
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
      <div className="drawer-side bg-[#9fbaa8]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 font-bold">
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
              <li>
                <NavLink to="/instructors">
                  <FaGraduationCap></FaGraduationCap> Instructors
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/allClass">
                  <FaBookReader></FaBookReader> Classes
                </NavLink>{" "}
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaChalkboardTeacher></FaChalkboardTeacher> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to=" ">
                  <FaUsers></FaUsers> My Class
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/instructors">
                  <FaGraduationCap></FaGraduationCap> Instructors
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/allClass">
                  <FaBookReader></FaBookReader> Classes
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
              <li>
                <NavLink to="/instructors">
                  <FaGraduationCap></FaGraduationCap> Instructors
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/allClass">
                  <FaBookReader></FaBookReader> Classes
                </NavLink>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
