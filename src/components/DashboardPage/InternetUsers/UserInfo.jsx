/* eslint-disable react/prop-types */
const UserInfo = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      <p>
        <strong>Package Name:</strong> {user.packageName}
      </p>
      <p>
        <strong>Service Name:</strong> {user.serviceName}
      </p>
    </div>
  );
};

export default UserInfo;
