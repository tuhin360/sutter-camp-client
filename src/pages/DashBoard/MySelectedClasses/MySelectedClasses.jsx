import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useSelectCard from "../../../hooks/useSelectCard";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
    const [courseCart, refetch] = useSelectCard();
    console.log(courseCart);
    const total = courseCart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

 const handleDelete = (item) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://sutter-camp-server.vercel.app/selectClasses/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            refetch();
            Swal.fire(
                "Deleted!", 
                "Your file has been deleted.", 
                "success");
          }
        });
    }
  });
};


     

  return (
    <div>
      <Helmet>
        <title>Sutter Camp | My Selected Classes</title>
      </Helmet>
      <div className="uppercase font-bold my-20 h-[60px]">
        <h3 className="text-3xl">Total Items:  { courseCart?.length || 0} </h3>  
        <h3 className="text-3xl my-8">Total Price: ${total} </h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm mb-20">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full  mt-10">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Instructor</th>
              <th>Instructor Name</th>
              <th>Class</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseCart.map((item, index) => (
              <tr key={item._id} item={item}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td>
                {item.instructorName}
                </td>
                <td>
                  {item.name}
                  <br />
                </td>
                <td className="text-end">{item.price}</td>
                <td>
                  <button   onClick={() => handleDelete(item)}
                     
                    className="btn btn-ghost bg-red-600 text-white "
                  >
                    <FaTrashAlt></FaTrashAlt>
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

export default MySelectedClasses;

