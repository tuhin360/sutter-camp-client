import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const { googleSignIn } = useContext(AuthContext);
  
    const handleGoogleSignIn = () => {
      googleSignIn().then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      });
    };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="w-full text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
