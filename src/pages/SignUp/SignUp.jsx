import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import signup from "../../../public/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocailLogin/SocialLogin";
import { Slide, Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {name: data.name, email:data.email}
          fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   createUser(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     console.log(loggedUser);
  //   });
  // };

  return (
    <>
      <Helmet>
        <title>Sutter Camp | Sing Up</title>
      </Helmet>

      <div className="hero min-h-screen my-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse   ">
          <Slide>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold pb-5 ml-4 text-blue-600">
                Sign Up Please!
              </h1>
              <img
                className="rounded-lg ml-4"
                style={{ width: "400px", height: "300px" }}
                src={signup}
                alt=""
              />
            </div>
          </Slide>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Zoom>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*?[A-Z])(?=.*?[!@#$%^&*]).{6,25}$/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      Password is required and must be least six character, a
                      uppercase letter and special character
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="confirm password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoUrl")}
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
            </Zoom>
            <Zoom>
              <p className="text-center mb-6">
                <small>
                  Already have an account?{" "}
                  <Link className="font-bold" to="/login">
                    Login
                  </Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
