import { Link } from "react-router-dom";
import errorImg from '../../assets/Home/Error/error.gif'
const NotFoundPage = () => {
  return (
    <div className="w-1/2 mx-auto mt-40 text-center">
      <img className="h-80" src={errorImg} alt="" />

      <button className="btn btn-success mt-10 ">
        <Link to="/" className="font-bold ">
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;