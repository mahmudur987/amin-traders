const WelcomeOilPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-20 lg:m-5">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center gap-10   ">
          <h2 className="text-3xl text-center font-bold my-4 text-accent">
            {" "}
            Welcome
          </h2>
          <p className="mb-4">
            Plus, it’s been linked to several health benefits, especially when
            it comes to your heart, skin, and bones. However, soybean oil is a
            highly refined oil rich in omega-6 fats, and some studies suggest
            that its consumption may be associated with several negative health
            effects. This article covers 6 potential health benefits of soybean
            oil, plus possible downsides.
          </p>
          <p className="mb-4">
            1. High smoke point :The smoke point of an oil is the temperature at
            which fats start to break down and oxidize. This results in the
            formation of harmful, disease-causing compounds called free
            radicals, which can cause oxidative stress in the body
          </p>

          <p>
            <button className="btn btn-accent">Learn More</button>
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full"
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/soybean-oil-1296x728-header-1296x728.jpg?w=1155&h=1528"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeOilPage;
