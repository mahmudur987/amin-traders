const HomeAboutUs = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10">
      <h2 className="text-3xl text-center font-bold my-4">About Us</h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 grid items-center  ">
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
