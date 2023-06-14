import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
 

const PopularClassCard = ({ popularClass }) => {
  const { _id, image, className } = popularClass;

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
          <h2 className="card-title text-2xl font-bold">{className}</h2>
          <div className="card-actions flex justify-between ">
            <p className="text-justify ">
              Explore the beauty of nature and learn how to capture breathtaking
              landscapes. This class focuses on composition, lighting, and
              techniques specific to landscape photography. Capture the world
              around you through the lens of a camera and unlock your creativity
              with the art of photography.{" "}
            </p>
            <Link to="/details">
               <button className="btn btn-outline border-b-4 mt-4" >
               More Details
        </button>
            </Link>
            <button
              className="items-center text-gray-600 font-bold text-2xl border-2 border-gray
            -500 rounded-full p-2 mt-2"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
