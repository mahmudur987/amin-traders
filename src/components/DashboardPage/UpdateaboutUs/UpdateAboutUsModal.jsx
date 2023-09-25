/* eslint-disable react/prop-types */
// Modal.js
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const UpdateAboutUsModal = ({ isOpen, onClose, data, refetch }) => {
  const [image, setimage] = useState(null);
  const [heading, setheading] = useState(data?.heading);
  const [aboutFor, setAboutFor] = useState(data?.aboutFor);
  const [text1, settext1] = useState(data?.text1);
  const [text2, settext2] = useState(data?.text2);

  const handleSubmit = (e) => {
    e.preventDefault();

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
          console.log(imagedata.data.display_url);
          if (imagedata.data) {
            const Data = {
              aboutFor,
              ImageUrl: imagedata.data.display_url,
              heading,
              text1,
              text2,
              id: data?._id,
            };
            console.log("newGasData", Data);
            AxiosBaseURL.post(`/extrah/aboutus`, Data)
              .then((data) => {
                console.log(data.data);
                toast.success(data.data.status);
                refetch();
              })
              .catch((err) => {
                console.error(err);
                toast.error(err.message);
              });
          }
        })
        .catch((err) => {
          toast.error(err.message);

          console.error("imagebb error", err);
        });
    } else {
      const newData = {
        aboutFor,
        heading,
        ImageUrl: data?.ImageUrl,
        text1,
        text2,
        id: data?._id,
      };

      console.log("newdata", newData);

      AxiosBaseURL.post(`/extrah/aboutus`, newData)
        .then((data) => {
          refetch();
          console.log(data);
          //   toast.success(data.data.status);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    }

    onClose();
  };

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
            <p className="text-xl font-bold"> Update Internet Package </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* heading */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                About For
              </label>
              <input
                type="text"
                name="name"
                defaultValue={aboutFor}
                readOnly
                onChange={(e) => setAboutFor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* heading */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Heading
              </label>
              <input
                type="text"
                name="name"
                defaultValue={heading}
                onChange={(e) => setheading(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* image */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => setimage(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* text1 */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Text 1
              </label>
              <textarea
                name="address"
                defaultValue={text1}
                onChange={(e) => settext1(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Text 2
              </label>
              <textarea
                name="address"
                defaultValue={text2}
                onChange={(e) => settext2(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
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

export default UpdateAboutUsModal;
