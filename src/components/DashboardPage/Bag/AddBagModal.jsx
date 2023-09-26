import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const AddBagModal = ({ isOpen, onClose, refetch }) => {
  const [image, setimage] = useState({});
  const [isOffer, setIsOffer] = useState(false);
  const [lessPrice, setlessPrice] = useState(0);
  const [formData, setFormData] = useState({
    bagType: "",
    name: "",
    material: "",
    color: "",
    size: "",
    quantity: 1,
    price: 0,
    totalorder: 0,
    description: "",
    bestDeals: false,
    publishDate: Date,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
            ...formData,
            offer: {
              isOffer,
              lessPrice,
            },
            image: imagedata.data.display_url,
          };
          console.log(newData);

          AxiosBaseURL.post("/bag", newData)
            .then((data) => {
              console.log(data.data);
              toast.success("product Added successfully");
              refetch();
            })
            .catch((err) => {
              toast.error(" Error Happend");
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

      <div className="modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold"> Add a New Bag </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className=" grid grid-cols-2 p-2 gap-1">
            {/* Offer */}
            <div className="flex flex-col ">
              <label className="text-gray-600"> Offer price </label>
              <input
                type="number"
                name="lessPrice"
                value={lessPrice}
                onChange={(e) => {
                  setlessPrice(e.target.value);

                  if (e.target.value > 0) {
                    setIsOffer(true);
                  }
                }}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* image */}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
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
            {/* Bag Type */}
            <div>
              <label htmlFor="bagType" className="text-gray-600 block">
                Bag Type
              </label>
              <input
                type="text"
                id="bagType"
                required
                name="bagType"
                value={formData.bagType}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="text-gray-600 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Material */}
            <div>
              <label htmlFor="material" className="text-gray-600 block">
                Material
              </label>
              <input
                type="text"
                id="material"
                name="material"
                required
                value={formData.material}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Color */}
            <div>
              <label htmlFor="color" className="text-gray-600 block">
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                required
                value={formData.color}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className="text-gray-600 block">
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                required
                value={formData.size}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="text-gray-600 block">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                required
                value={formData.quantity}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="text-gray-600 block">
                Price
              </label>
              <input
                type="number"
                id="price"
                required
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="text-gray-600 block">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                required
                onChange={handleChange}
                rows="4"
                className="border border-gray-300 rounded-md p-2 w-full"
              ></textarea>
            </div>

            {/* Best Deals */}
            <div className="flex items-center">
              <label className="text-gray-600">Best Deals?</label>
              <input
                type="checkbox"
                name="bestDeals"
                checked={formData.bestDeals}
                onChange={(e) =>
                  setFormData({ ...formData, bestDeals: e.target.checked })
                }
                className="ml-2"
              />
            </div>

            {/* Publish Date */}
            <div>
              <label htmlFor="publishDate" className="text-gray-600 block">
                Publish Date
              </label>
              <input
                type="date"
                id="publishDate"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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

export default AddBagModal;
