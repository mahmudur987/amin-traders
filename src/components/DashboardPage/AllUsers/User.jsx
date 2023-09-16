/* eslint-disable react/prop-types */

const User = ({ user }) => {
  const { name, email, phoneNumber, address, photoUrl } = user || {};

  return (
    <>
      {user && (
        <div className="  shadow-xl  flex flex-col justify-between p-1">
          <div className="bg-base-200 h-32 flex justify-center ">
            <img className="h-32 rounded" src={photoUrl} alt="Profile" />
          </div>
          <div className="flex flex-col justify-between flex-wrap h-full">
            <h1 className="text-2xl uppercase font-bold mb-4">{name}</h1>
            <p className="text-gray-600  flex flex-wrap">Email : {email}</p>
            <p className="text-gray-600 ">Phone Number : {phoneNumber}</p>
            <p className="text-gray-600 ">
              Address {address ? address : "please add your address"}
            </p>
          </div>
          <div className="flex  gap-2 justify-end my-3 items-center">
            <p className="text-primary">
              Add this member to internet user List
            </p>
            <button className="btn btn-sm btn-primary">Add </button>
          </div>
          <div className="flex flex-wrap mt-2 justify-end">
            <button className="btn btn-sm btn-info">Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
