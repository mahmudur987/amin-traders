import React from "react";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
const Advantage = () => {
  const data = [
    {
      heading: "Returns & Warranty",
      description:
        "Buy with confidence! Our products come with a warranty and easy return policy.",
      icon: <BsFillChatRightQuoteFill />,
    },

    {
      heading: "24/7 Availability",
      description:
        "24/7, allowing users to shop at their convenience, even during non-business hours.",
      icon: <MdEventAvailable />,
    },

    {
      heading: "Customer Support",
      description:
        "Get help anytime! Our friendly customer support team is here for you",
      icon: <RiCustomerServiceFill />,
    },
  ];

  return (
    <div className="my-10 md:my-20 lg:my-30">
      <h1 className="uppercase text-xl md:text-2xl lg:text-4xl text-center font-bold  my-8">
        Why choose us
      </h1>
      <div className=" flex justify-around flex-wrap ">
        {data.map((x, i) => (
          <div key={i}>
            <div className="card w-80 h-64 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <span className="text-5xl">{x.icon}</span>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title"> {x.heading} </h2>
                <p> {x.description} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
