import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  // const [showPassword, setShowPassword] = useState(false);
  //context api
  const { signInUser } = useAuth();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();

  //hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    //sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          navigate(location?.state || "/");
          toast.success("Successfully Login!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Please check your email and password");
      });
  };

  useEffect(() => {
    document.title = "Homely | Login";
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="card shrink-0 w-full max-w-sm rounded border bg-base-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <div>
                  <h1 className="text-3xl font-bold text-center">Login</h1>
                </div>
                <hr className="mt-6 mb-6" />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded"
                  {...register("password", { required: true })}
                />
                {/* <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span> */}
                {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]">
                  Login
                </button>
                <p className="mt-4">
                  Do not have an account?{" "}
                  <Link to="/register">
                    <span className="underline underline-offset-2 ">
                      Register
                    </span>{" "}
                  </Link>
                </p>
              </div>
              <hr className="mt-6" />
            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
