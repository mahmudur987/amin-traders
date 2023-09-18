const HomeAboutUs = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10">
      <h2 className="text-3xl text-center font-bold my-4">About Us</h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 grid items-center  ">
          <p className="mb-4">
            At AMIN_TRADERS, we ve taken the hassle out of shopping for your
            everyday essentials. Whether you re looking for high-speed broadband
            internet to stay connected, cylinder gas for cooking, or quality
            food oil and woven bags, we have you covered. Welcome to a world of
            convenience, where your needs are our top priority
          </p>
          <p className="mb-4">
            Discover a new level of convenience and quality at Amin Traders. We
            offer a range of essential services, including high-speed broadband
            internet, cylinder gas, and everyday necessities like food oil and
            woven bags. Step into a shopping experience thats tailored to your
            needs, and let us simplify your life.
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/1304140612/photo/welcome-in-different-language-on-paper-with-world-map-background.jpg?s=2048x2048&w=is&k=20&c=EQ7Sjt5vc7DLzrD8c-55YCp0ldWeBtuzl5472kh4AYc="
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
