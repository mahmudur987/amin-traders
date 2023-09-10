import React from "react";

const Welcome = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center gap-10   ">
          <h2 className="text-3xl text-center font-bold my-4 text-accent">
            {" "}
            Welcome
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            feugiat, urna eu vulputate iaculis, mauris mauris fringilla est,
            vitae volutpat est nunc sed massa. Sed interdum risus ut pharetra
            commodo.
          </p>
          <p className="mb-4">
            Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi
            eget tortor vulputate, sed tincidunt urna pharetra. Fusce finibus
            quam purus, ac eleifend nibh mattis at. Sed a fermentum urna. Sed
            iaculis consectetur nisi, in elementum felis consequat in. Fusce
            eget libero non leo finibus eleifend.
          </p>

          <p>
            <button className="btn btn-accent">Learn More</button>
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full"
            src="https://bmenergybd.com/wp-content/uploads/2020/07/BM_LP_Cylinder-2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
