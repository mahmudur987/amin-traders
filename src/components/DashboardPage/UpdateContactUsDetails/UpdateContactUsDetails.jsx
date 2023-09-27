import { useState, useEffect } from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useRevalidator } from "react-router-dom";
import toast from "react-hot-toast";
function UpdateContactUsDetails() {
  let revalidator = useRevalidator();
  const [image, setimage] = useState(null);

  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phoneNumber: "",
    officeTime: "",
    _id: "",
    ImageUrl: "",
    facebook: "",
    twiter: "",
    youtube: "",
    instagram: "",
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

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
              ...formData,
              ImageUrl: imagedata.data.display_url,
            };
            console.log("Data", Data);
            AxiosBaseURL.patch("/extrah/update-address", Data)
              .then((data) => {
                console.log(data.data);
                toast.success(data.data.status);
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
      await AxiosBaseURL.patch("/extrah/update-address", formData)
        .then((data) => {
          console.log(data);
          revalidator.revalidate();
          toast.success("your profile update successfully");
        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    AxiosBaseURL.get("/extrah") // Adjust the endpoint as needed
      .then((response) => {
        const existingData = response.data.data[0]; // Update with the actual data retrieval logic
        setFormData(existingData);
      })
      .catch((error) => {
        console.error("Error fetching address details:", error);
      });
  }, []);

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit}>
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

        {/* address */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Email */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* phone number */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Facebook */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Facebook
          </label>
          <input
            type="tel"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        {/* Twiter */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Twiter
          </label>
          <input
            type="tel"
            name="twiter"
            value={formData.twiter}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* You Tube */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            You Tube
          </label>
          <input
            type="tel"
            name="youtube"
            value={formData.youtube}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        {/* Instagram */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instagram
          </label>
          <input
            type="tel"
            name="instagram"
            value={formData.instagram}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* officeTime */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Office Time
          </label>
          <input
            type="text"
            name="officeTime"
            value={formData.officeTime}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Update Address Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateContactUsDetails;
