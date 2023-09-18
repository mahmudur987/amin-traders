/* eslint-disable react/prop-types */
// Modal.js

import { useContext } from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { UsedbUser } from "../../Hooks/dbUser";
import { authContext } from "../../../context/UserContext";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";

const ProfileUpdateModal = ({ isOpen, onClose, data }) => {
  const { user, updateUserProfile } = useContext(authContext);
  const [dbuser, isLoading, isError, error, refetch] = UsedbUser(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const from = e.target;
    const name = from.userName.value;
    const phoneNumber = from.userPhoneNumber.value;
    const address = from.userAddress.value;
    const image = from.photo.files[0];
    if (image) {
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
            const updateUser = {
              name,
              phoneNumber,
              address,
              email: user?.email,
              photoUrl: photoURL,
            };

            updateUserProfile({ displayName: name, photoURL })
              .then(() => {
                AxiosBaseURL.post(`/users/${user?.email}`, updateUser)
                  .then((data) => {
                    console.log("update User", data.data.data);
                    refetch();
                  })
                  .catch((err) => {
                    console.log("update User", err);
                  });
              })
              .catch((err) => {
                console.error(err);
              });
          }
        });
    } else {
      const updateUser = {
        name,
        phoneNumber,
        address,
        email: user?.email,
      };
      AxiosBaseURL.post(`/users/${user?.email}`, updateUser)
        .then((data) => {
          refetch();
          console.log("update User", data.data.data);
        })
        .catch((err) => {
          console.log("update User", err);
        });
    }

    onClose();
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50 flex items-center justify-center`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">
              {" "}
              Update your Profile
              {/* <span className="text-info text-2xl">{dbuser?.name}</span>{" "} */}
            </p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M6.293 6.293a1 1 0 011.414 0L9 7.586l1.293-1.293a1 1 0 111.414 1.414L10.414 9l1.293 1.293a1 1 0 11-1.414 1.414L9 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L7.586 9 6.293 7.707a1 1 0 010-1.414z"></path>
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Photo
              </label>
              <input
                type="file"
                name="photo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={dbuser?.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </div>

            {/* email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email (not changeable)
              </label>
              <input
                type="email"
                name="userEmail"
                value={dbuser?.email}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="userPhoneNumber"
                defaultValue={dbuser?.phoneNumber}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                name="userAddress"
                defaultValue={dbuser?.address}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
