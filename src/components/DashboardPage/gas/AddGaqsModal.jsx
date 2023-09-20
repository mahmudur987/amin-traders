/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const AddGasModal = ({ isOpen, onClose, refetch }) => {
  const [name, setName] = useState("");
  const [Brand, setbrand] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState(0);
  const [image, setimage] = useState({});
  const [offerPrice, setofferPrice] = useState(0);
  const [isOffer, setisoffer] = useState(Boolean);
  const [use, setuse] = useState("");
  const [valveSize, setvalveSize] = useState("");
  const [valveType, setvalveType] = useState("");
  const [publishDate, setPublishDate] = useState(
    new Date(Date.now()).toLocaleString()
  );
  const [bestDeals, setBestDeals] = useState(false);
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
            name,
            Brand,
            quantity,
            price,
            offer: { isOffer, lessPrice: offerPrice },
            picture: imagedata.data.display_url,
            use,
            valveSize,
            valveType,
            publishDate,
            bestDeals,
          };
          console.log(newData);
          AxiosBaseURL.post("/gasservice/allgaspackage", newData)
            .then((data) => {
              refetch();
              console.log(data.data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
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
            <p className="text-xl font-bold"> Add A New Gas </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-4">
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
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
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

            {/* brand name */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Brand Name
              </label>
              <input
                type="text"
                name="brandName"
                defaultValue={Brand}
                placeholder="Brand "
                onChange={(e) => setbrand(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* quantity */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                onChange={(e) => setquantity(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* price */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                onChange={(e) => setprice(parseInt(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="price"
              />
            </div>

            {/* offer */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Offer
              </label>
              <input
                type="number"
                name="name"
                defaultValue={offerPrice}
                onChange={(e) => {
                  setofferPrice(parseInt(e.target.value));

                  if (e.target.value === "0") {
                    setisoffer(false);
                  }
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="offer"
              />
            </div>

            {/* best deals */}
            <div className="mb-4  flex gap-10 items-center">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="phoneNumber"
              >
                Best Deals
              </label>
              <input
                type="checkbox"
                name="vat"
                onChange={(e) => setBestDeals(e.target.checked)}
              />
            </div>

            {/* use */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Using Type
              </label>
              <input
                type="text"
                name="name"
                defaultValue={use}
                onChange={(e) => setuse(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=" Using Type"
              />
            </div>

            {/* valve size */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Valve Size
              </label>
              <input
                type="text"
                name="name"
                defaultValue={valveSize}
                onChange={(e) => setvalveSize(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="valve Size"
              />
            </div>

            {/* valve type */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Valva Type
              </label>
              <input
                type="text"
                name="name"
                defaultValue={valveType}
                onChange={(e) => setvalveType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="valve"
              />
            </div>
            {/* Publish date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Publish Date
              </label>
              <input
                type="date"
                name="publishDate"
                onChange={(e) => setPublishDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="valve"
              />
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

export default AddGasModal;
