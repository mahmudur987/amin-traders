import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
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
  const { login, googleLogIn, user } = useContext(authContext);

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

  return (
    <section className="bg-base-200 font-bold md:flex">
      <div className="md:w-1/2  md:mx-5 flex items-center  ">
        <img
          className="h-96 mx-auto "
          src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div className=" my-10 md:w-1/2 ">
        <h1 className="text-4xl text-center font bold mb-8"> LOG IN</h1>
        {/* <p className="text-center">Admin Email :safemahmud987@gmail.com</p>
        <p className="text-center">Admin Password :123456A@9</p> */}
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
            <span className="label-text-alt mx-auto">Forget password</span>
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
      </div>
    </section>
  );
};

export default LoginPage;
