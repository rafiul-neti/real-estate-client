import React, { use, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    loading,
    setUser,
    googleSignIn,
    setLoading,
    createUser,
    updateUserInfo,
  } = use(AuthContext);
  const axiosInstance = useAxios();

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Please Provide a Valid Password!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);

        updateUserInfo({
          displayName: name,
          photoURL: image,
        })
          .then()
          .catch((err) => toast.error(err.message));

        const userInfo = {
          name,
          image,
          email,
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
        navigate("/");
        setError("");
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
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
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <section className="bg-neutral min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto perspective-distant flex flex-row-reverse">
        <div className="flex-1 bg-white p-5 rounded-tr-xl rounded-br-xl">
          <h2 className={`my-8 text-center text-h1 ${error && "text-red-600"}`}>
            {error ? error : "Please Register"}
          </h2>
          <form onSubmit={handleRegister} className="text-center space-y-6">
            <input
              type="text"
              name="name"
              className="input w-full border-0 bg-neutral"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              name="email"
              className="input w-full border-0 bg-neutral"
              placeholder="Enter Your Email"
            />
            <input
              type="text"
              name="image"
              className="input w-full border-0 bg-neutral"
              placeholder="ImageURL"
            />
            <input
              type="password"
              name="password"
              className="input w-full border-0 bg-neutral"
              placeholder="Enter Your Password"
            />
            <button className="btn btn-primary btn-block text-base-100 outline-0">
              Register
            </button>
          </form>
          <div className="flex gap-5 items-center my-5">
            <div className="inline-block w-[35%] h-px bg-base-300"></div>
            <span className="text-sm">Or Login With</span>
            <div className="inline-block w-[35%] h-px bg-base-300"></div>
          </div>
          <button
            onClick={handleGoogleLogin}
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

        <div className="flex-1 text-base-100 text-center bg-secondary p-5 space-y-5 rounded-tl-xl rounded-bl-xl">
          <span className="flex justify-center">
            <FiUserPlus className="text-white text-9xl" />
          </span>
          <h1 className="text-h1">Hello, Dear!</h1>
          <p className="text-body">
            To keep connected with us please login with your personal info
          </p>
          <Link
            to={`/login`}
            className="btn bg-transparent text-base-100 btn-wide"
          >
            Login <FaArrowAltCircleLeft />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
