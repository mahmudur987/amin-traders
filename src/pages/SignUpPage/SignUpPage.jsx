/* eslint-disable no-undef */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/shared/loading/Loading";
import AxiosBaseURL from "../../axios/AxiosConfig";
import { authContext } from "../../context/UserContext";

const SignUpPage = () => {
  const { signUp, updateUserProfile, Setloading, loading, Setuser } =
    useContext(authContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    Setloading(true);

    const image = data.photo[0];
    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=d8359aaef7717cdf56ff9bb7b30b6225`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        console.log(imagedata.data);
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          signUp(data.email, data.password)
            .then((result) => {
              const user = result.user;
              Setuser(user);
              updateProfile(data.name, photoURL, data.email, data.phoneNumber);
            })
            .catch((error) => {
              toast.error(error.message);
              console.error(error);
              Setloading(false);
            });
        }
      });
  };

  const updateProfile = (displayName, photoURL, email, phoneNumber) => {
    const fullprofile = {
      name: displayName,
      photoUrl: photoURL,
      email,
      phoneNumber,
      address: "",
    };
    const profile = { displayName, photoURL };
    updateUserProfile(profile)
      .then(() => {
        saveUser(fullprofile);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
        Setloading(false);
      });
  };

  const saveUser = (fullprofile) => {
    toast.success("user signup successfully");
    // console.log(fullprofile);
    // eslint-disable-next-line no-undef

    AxiosBaseURL.post(`/users`, fullprofile)
      .then((data) => {
        console.log("Save user", data);
      })
      .catch((error) => {
        toast.error(error.message);

        console.error("Error:", error);
      });
    toast.success("user signup successfully");
    Setloading(false);
    navigate(from, { replace: true });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className=" flex justify-center items-center gap-5 m-2 lg:mx-10 ">
      <div className="w-1/2 p-5">
        <img
          className="rounded-md"
          src="https://images.unsplash.com/photo-1635945416566-6302b54c056b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          alt=""
        />
      </div>

      <div className="w-1/2 border  max-w-2xl p-4">
        <h1 className="text-4xl text-center uppercase font-bold text-primary">
          Sign up
        </h1>
        <form
          className=" flex flex-col justify-center items-center"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is must",
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p role="alert">{errors.name?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Photo</span>
            </label>
            <input
              {...register("photo", {
                required: "please select a photo",
              })}
              type="file"
              placeholder="Choose photo"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.photo && (
              <p className="text-red-600" role="alert">
                {errors.photo?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("phoneNumber", {
                required: "please select a photo",
              })}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.phoneNumber && (
              <p className="text-red-600" role="alert">
                {errors?.phoneNumber?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is must",
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors?.email && (
              <p className="text-red-600" role="alert">
                {errors?.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "password is required ",
                minLength: {
                  value: 6,
                  message: "password must be 6 character",
                },
              })}
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <p className="text-center mt-3">
            <input className=" btn btn-primary" type="submit" />
          </p>
        </form>
        <p className="text-sm">
          already have an account{" "}
          <Link className="text-blue-500 hover:underline" to={"/service/login"}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
