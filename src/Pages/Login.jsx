import React, { use } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn, signInUser, setLoading, setUser } = use(AuthContext);
  const axiosInstance = useAxios();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);

        Swal.fire({
          title: "Login Successfull!",
          icon: "success",
          timer: 2000,
        });

        setLoading(false);

        navigate(location.state || "/");

        e.target.reset();
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        setUser(user);

        const userInfo = {
          name: user.displayName,
          image: user.photoURL,
          email: user.email,
        };

        axiosInstance.post("/user", userInfo).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "Congrats! You've Successfully Registered!",
              icon: "success",
              timer: 2000,
            });
          }
        });
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <section className="bg-neutral min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto perspective-distant flex">
        <div className="flex-1 bg-white p-5 rounded-tl-xl rounded-bl-xl">
          <h2 className="my-8 text-center text-h1">Login Here</h2>
          <form onSubmit={handleLogin} className="text-center space-y-6">
            <input
              type="email"
              name="email"
              className="input w-full border-0 bg-neutral"
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              name="password"
              className="input w-full border-0 bg-neutral"
              placeholder="Enter Your Password"
            />
            <div className="text-sm flex items-center justify-between ">
              <div className="">
                <input type="checkbox" name="" id="" />
                <span>Remember Me</span>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button className="btn btn-primary btn-block text-base-100 outline-0">
              Login
            </button>
          </form>
          <div className="flex gap-5 items-center my-5">
            <div className="inline-block w-[35%] h-px bg-base-300"></div>
            <span className="text-sm">Or Login With</span>
            <div className="inline-block w-[35%] h-px bg-base-300"></div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-block bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>

        <div className="flex-1 text-base-100 text-center bg-secondary p-5 space-y-5 rounded-tr-xl rounded-br-xl">
          <span className="flex justify-center">
            <FiUserPlus className="text-white text-9xl" />
          </span>
          <h1 className="text-h1">Hello, Dear!</h1>
          <p className="text-body">
            Enter your details and start your journey with us!
          </p>
          <Link
            to={`/register`}
            className="btn bg-transparent text-base-100 btn-wide"
          >
            Register <FaCircleArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
