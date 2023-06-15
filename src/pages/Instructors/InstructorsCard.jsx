import { Link } from "react-router-dom";

const InstructorsCard = ({ allInstructor }) => {
  const { image, instructorName, email, category } = allInstructor;
  return (
    <div>
      <div
        className="card card-compact w-96 bg-base-100 shadow-xl"
        data-aos="fade-up"
      >
        <figure>
          <img className="" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold"> </h2>
          <div className="card-actions flex justify-between ">
            <p className="text-justify ">
              <h4
                className="text-3xl font-bold text-center"
                data-aos="zoom-in-up"
              >
                {instructorName}
              </h4>
              <p className="text-center py-3">{category}</p>
              <p className="text-center"><b>Email:</b> {email}</p>
              <div className="text-center">
              <Link to="">
                <button className="btn btn-sm  btn-outline border-b-4 mt-4">
                 See Classes
                </button>
              </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
