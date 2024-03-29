import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useSelectCard from "../../hooks/useSelectCard";

const AllClassCard = ({ allClass }) => {
  const { image, name, instructorName, availableSeats, price, _id} = allClass;
   const {user} = useContext(AuthContext);
   const [, refetch] = useSelectCard();
   const navigate = useNavigate();
   const location = useLocation();

   const handleSelectClass = allClass => {
    console.log(allClass);
    if(user && user.email){
      const  selectClass = {classId: _id, instructorName, name, image, price, email: user.email}
      fetch('https://sutter-camp-server.vercel.app/selectClasses',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(selectClass)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully selected this class',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to select the course',
       
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from: location}})
        }
      })
    }
   }

  return (
    <div>
      <div
        data-aos="zoom-in"
        className="card card-compact w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src={image} />
        </figure>
        <div data-aos="zoom-in" className="card-body">
          <h2 className="card-title text-2xl font-bold"> </h2>
          <div className="card-actions flex justify-between ">
            <p className="text-justify ">
              <h4>
                <b>Class Name:</b> {name}
              </h4>
              <p>
                <b>Instructor Name:</b> {instructorName}
              </p>
              <p>
                <b>Available Seat:</b> {availableSeats}
              </p>
              <p>
                <b>Course Price:</b> {price}
              </p>
            </p>
            <div>
              <Link to="">
                <button onClick={() => handleSelectClass(allClass)} className="btn btn-outline border-b-4 mt-4">
                  Select
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
