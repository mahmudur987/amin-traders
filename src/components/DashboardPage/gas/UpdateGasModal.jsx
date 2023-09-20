/* eslint-disable react/prop-types */
// Modal.js
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

const UpdateGasModal = ({ isOpen, onClose, data, refetch }) => {
  const { Setloading } = useContext(authContext);
  const [name, setName] = useState(data?.name);
  const [Brand, setbrand] = useState(data?.Brand);
  const [quantity, setquantity] = useState(data.quantity);
  const [price, setprice] = useState(data?.price);
  const [image, setimage] = useState(null);
  const [offerPrice, setofferPrice] = useState(data?.offer?.lessPrice);
  const [isOffer, setisoffer] = useState(data?.offer?.isOffer);
  const [use, setuse] = useState(data?.use);
  const [valveSize, setvalveSize] = useState(data?.valveSize);
  const [valveType, setvalveType] = useState(data.valveType);
  const [bestDeals, setBestDeals] = useState(data?.bestDeals);

  const handleSubmit = (e) => {
    e.preventDefault();
    Setloading(true);
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
              name,
              Brand,
              quantity,
              price,
              offer: { isOffer, lessPrice: offerPrice },
              picture: imagedata.data.display_url,
              use,
              valveSize,
              valveType,
              bestDeals,
            };
            console.log("newGasData", Data);
            AxiosBaseURL.post(`/gasservice/${data._id}`, Data)
              .then((data) => {
                console.log(data.data);
                refetch();
                Setloading(false);
              })
              .catch((err) => {
                console.error(err);
                Setloading(false);
              });
          }
        })
        .catch((err) => {
          console.error("imagebb error", err);
        });
    } else {
      const newData = {
        name,
        Brand,
        quantity,
        price,
        offer: { isOffer, lessPrice: offerPrice },
        image: data?.image,
        use,
        valveSize,
        valveType,
        bestDeals,
      };

      console.log("newdata", newData);

      AxiosBaseURL.post(`/gasservice/${data?._id}`, newData)
        .then(() => {
          refetch();
          Setloading(false);
        })
        .catch((err) => {
          Setloading(false);
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
            <p className="text-xl font-bold"> Update {name} </p>
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
                placeholder="Name"
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
                name="name"
                defaultValue={quantity}
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
                name="name"
                defaultValue={price}
                onChange={(e) => setprice(parseInt(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
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
                placeholder="Name"
              />
            </div>
            {/* best Deals */}

            <div className="mb-4  flex gap-10 items-center">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="phoneNumber"
              >
                Best Deals
              </label>
              <input
                checked={bestDeals}
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
                UsingType
              </label>
              <input
                type="text"
                name="name"
                defaultValue={use}
                onChange={(e) => setuse(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
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
                placeholder="Name"
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
                placeholder="Name"
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

export default UpdateGasModal;
