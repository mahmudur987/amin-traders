import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      name: "Broad-band Internet",
      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "LPG Gas",
      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1596465664095-f1f622965562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      name: "Food Oil",
      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1318&q=80",
    },
  ];
  return (
    <div className="container my-10">
      <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center my-5">
        our services
      </h1>

      <div className="w-full lg:w-9/12 mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 my-10">
        {servicesData.map((data, i) => (
          <Service key={i} service={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
