import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import loginImg from '../../../public/images/login.png';
import SocialLogin from "../Shared/SocailLogin/SocialLogin";
import { Slide, Zoom} from "react-awesome-reveal";
 

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";


  // login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User logged in successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Sutter Camp | Login</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Slide>
            <h1 className="text-3xl font-bold  ml-4 mb-4 text-blue-600">Please Login!</h1>
            </Slide>
            <Slide>
            <img className="rounded-lg ml-4" style={{ width: '300px', height: '200px' }} src={loginImg} alt="" />
            </Slide>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Zoom>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              </div>
             <Zoom>
             <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
             </Zoom>
            </form>
            </Zoom>
            <p className="text-center mb-6">
              <Zoom>
              <small>
                New Here?{" "}
                <Link className=" font-bold" to="/signup">
                  Create an account?
                </Link>
              </small>
              </Zoom>
              <Zoom>
              <SocialLogin></SocialLogin>
              </Zoom>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
