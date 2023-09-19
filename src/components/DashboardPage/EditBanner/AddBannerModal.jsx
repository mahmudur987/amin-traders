/* eslint-disable react/prop-types */
// Modal.js
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const AddBannerModal = ({ isOpen, onClose, refetch }) => {
  // eslint-disable-next-line no-unused-vars

  const [heading, setheading] = useState("");
  const [text, settext] = useState("");
  const [bannerFor, setbannerFor] = useState("homePage");
  const [image, setimage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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
          const newData = {
            heading,
            text,
            bannerFor,
            ImageUrl: imagedata.data.display_url,
            publishDate: new Date(Date.now()).toLocaleString(),
          };
          console.log(newData);

          AxiosBaseURL.post("/banner", newData)
            .then((data) => {
              console.log(data.data);
              toast.success("banner added successfully");
              refetch();
            })
            .catch((err) => {
              console.error(err);
              toast.error("some erroe happen");
            });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("some erroe happen");
      });

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
            <p className="text-xl font-bold"> Add a New Oil Package </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* image */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Background Image
              </label>
              <input
                type="file"
                name="image"
                required
                onChange={(e) => setimage(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </div>

            {/* Heading*/}
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
                placeholder="Name"
              />
            </div>

            {/* inside text */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Text
              </label>
              <input
                type="text"
                name="brandName"
                defaultValue={text}
                onChange={(e) => settext(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Banner for */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Banner For
              </label>
              <select
                className="w-full border rounded-lg py-2 px-3"
                value={bannerFor}
                required
                onChange={(e) => setbannerFor(e.target.value)}
              >
                <option disabled value={"homePage"}>
                  please select
                </option>
                <option value={"homePage"}>Home Page</option>
                <option value={"internetPage"}>Home Page</option>
                <option value={"gasPage"}>L P G Gas</option>
                <option value={"oilPage"}>Food Oil</option>
              </select>
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

export default AddBannerModal;
