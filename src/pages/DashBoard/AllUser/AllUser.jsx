
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaPenNib, FaPenSquare, FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await  axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const renderRoleButton = (user) => {
    if (user.role === "admin") {
      return "Admin";
    } else if (user.role === "instructor") {
      return "Instructor";
    } else {
      return (
        <>
          <button
            onClick={() => handleMakeAdmin(user)}
            className="btn btn-ghost bg-blue-600 text-white"
          >
            <FaUserShield />
          </button>
          <button
            onClick={() => handleMakeInstructor(user)}
            className="btn btn-ghost bg-green-600 text-white ml-3"
          >
            <FaPenNib />
          </button>
        </>
      );
    }
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Manage User</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Total users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role <br /> Admin(Click Blue) <br /> Instructor(Click Green)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{renderRoleButton(user)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default AllUser;
