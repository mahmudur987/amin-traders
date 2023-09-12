import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import AxiosBaseURL from "../../axios/AxiosConfig";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { login, googleLogIn, user, passwordResset } = useContext(authContext);
  const [Email, setEmail] = useState("");

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error", error.message);
      });
  };
  const handleGoogleLogIn = () => {
    const provaider = new GoogleAuthProvider();
    if (user?.email) {
      return toast.error("please logout first");
    }

    googleLogIn(provaider)
      .then((result) => {
        const user = result.user;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const fullprofile = {
          name: displayName,
          photoUrl: photoURL,
          email,
          phoneNumber: "",
          address: "",
        };
        AxiosBaseURL.post(`/users`, fullprofile)
          // eslint-disable-next-line no-unused-vars
          .then((data) => {
            // console.log("Save user", data);
            toast.success("user login successfully");
          })
          .catch((error) => {
            toast.error(error.message);
            navigate(from, { replace: true });

            console.error("Error:", error);
          });
      })
      .catch((error) => {
        toast.error(error.message);

        console.error("Error:", error);
      });
  };

  const handleForgetPass = () => {
    console.log(Email);
    if (!Email)
      return toast.error("enter your email first", {
        id: "first",
      });

    passwordResset(Email)
      .then(() => {
        toast.success("password reset Email send To your Email address");
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 60));
        console.error("Error", error.message);
      });
  };

  return (
    <main className="bg-base-200 font-bold md:flex">
      <div className="md:w-1/2  md:mx-5 flex items-center  ">
        <img
          className="h-96 mx-auto "
          src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div className=" my-10 md:w-1/2 ">
        <h1 className="text-4xl text-center font bold mb-8"> LOG IN</h1>

        <form className="" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full text-center ">
            <label className="label mx-auto">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "email is required" })}
              placeholder="Email"
              className="input input-bordered w-full mx-auto lg:w-2/3"
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full text-center  ">
            <label className="label mx-auto">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be in 6 character",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full mx-auto lg:w-2/3"
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </div>

          <label className="label text-center">
            <button
              onClick={() =>
                document.getElementById("forgetPassModal").showModal()
              }
              className="btn btn-link text-blue-600 mx-auto"
            >
              Forget password
            </button>
          </label>

          <p className="text-center">
            <button
              className="btn btn-info w-1/2"
              placeholder="Log In"
              type="submit"
            >
              {" "}
              Log In
            </button>
          </p>
        </form>
        <div className="divider">OR</div>
        <p className="text-center p-3 mt-5 uppercase">
          {" "}
          <button onClick={handleGoogleLogIn} className="btn w-1/2 btn-accent ">
            {" "}
            Google LogIn
          </button>
        </p>

        <p>
          Dont have an account plese{" "}
          <Link
            to={"/service/signup"}
            className="text-blue-500 hover:underline"
          >
            sign Up
          </Link>
        </p>
      </div>

      {/* modal */}
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog
          id="forgetPassModal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Enter Your Email</h3>
            <p className="py-4">
              <input
                type="text"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => handleForgetPass()} className="btn">
                  ok
                </button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    </main>
  );
};

export default LoginPage;
