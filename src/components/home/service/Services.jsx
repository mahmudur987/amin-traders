import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      name: "Broad-band Internet",
      link: "/service",
      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "LPG Gas",
      link: "/service/gasservice",

      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1596465664095-f1f622965562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      name: "Food Oil",
      link: "/service/oilpage",

      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1318&q=80",
    },
    {
      name: "Bags",
      link: "/service/bags",

      description: "weqfrefrqwher  khqwbrgkhwqb wqhbrwq  q3jhgbiq3w",
      imageUrl:
        "https://bagworkshop.com/wp-content/uploads/2021/03/The-5-Best-Promotional-Bags-for-Your-Brand_v1-1.jpg",
    },
  ];
  return (
    <div className="container my-10">
      <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center my-5">
        our services
      </h1>

      <div className="w-full flex  justify-around flex-wrap md:p-5 ">
        {servicesData.map((data, i) => (
          <Service key={i} service={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
