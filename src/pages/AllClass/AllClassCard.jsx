import { Link } from "react-router-dom";

const AllClassCard = ({ allClass }) => {
  const { image, name, instructorName, availableSeats, price } = allClass;
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
                <b>Couse Name:</b> {name}
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
                <button className="btn btn-outline border-b-4 mt-4">
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
