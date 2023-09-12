// NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60" // Replace with the actual path to your image
        alt="404"
        className="max-w-sm w-full mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
