import React from "react";
import img1 from "../../assets/amin-traders.png";
const ProductLogo = ({ url }) => {
  return (
    <div className="relative w-full h-full">
      {/* Your Product Image */}
      <img src={url} alt={url} className="w-full h-full" />

      {/* Logo Container */}
      <div className="absolute bottom-0 left-0 p-2">
        <img src={img1} alt="Company Logo" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default ProductLogo;
