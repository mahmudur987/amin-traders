const HotOffer = () => {
  return (
    <div className="my-10 flex flex-col gap-10 items-center">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Ongoing Hot Offers
      </h1>

      <div className="flex gap-5 p-3">
        <figure className="w-1/2">
          <img
            className="w-full h-full rounded-full p-5"
            src="https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </figure>
        <figure className="w-1/2">
          <img
            className="w-full h-full rounded-md p-5"
            src="https://images.unsplash.com/photo-1650737736263-67daef292284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </figure>
      </div>

      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661589670435-65cfb3224205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Buy Router At Best price{" "}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
