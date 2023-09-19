import BagDisplay from "../../components/Bags/BagDisplay";

// Define your bag data (you can use the JSON data provided earlier)
const wovenBags = [
  {
    id: 1,
    name: "Jute Tote Bag",
    material: "Jute",
    color: "Natural",
    size: "Medium",
    price: 15.99,
    image:
      "https://www.remodelista.com/wp-content/uploads/2018/05/hand-woven-jute-tote-bag-natural-future-kept.jpg",
  },
  {
    id: 2,
    name: "Cotton Beach Bag",
    material: "Cotton",
    color: "Blue Stripes",
    size: "Large",
    price: 24.99,
    image:
      "https://www.bagworkshop.com/wp-content/uploads/2021/02/BWS-0163-Contrast-Beach-Bag-Natural.jpg",
  },
  {
    id: 3,
    name: "Rattan Market Basket",
    material: "Rattan",
    color: "Brown",
    size: "Small",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/71PpxySREGS.jpg",
  },
]; // Woven bag data
const nonWovenBags = [
  {
    id: 1,
    name: "Reusable Shopping Bag",
    material: "Polypropylene (PP)",
    color: "Green",
    size: "Standard",
    price: 2.99,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gh-012222-best-reusable-grocery-bags-1647963678.png",
  },
  {
    id: 2,
    name: "Promotional Tote Bag",
    material: "Non-Woven Polypropylene (NWPP)",
    color: "Red",
    size: "Medium",
    price: 1.49,
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001492270/PPAG-3528-Promo-Tote-Bag-Marquee-003?cb=e5a1bff88bf2c4eaffad616f4867c14ed0f6ec48",
  },
  {
    id: 3,
    name: "Custom Printed Non-Woven Bag",
    material: "Non-Woven Polyethylene (PE)",
    color: "White",
    size: "Large",
    price: 3.99,
    image:
      "https://bagmaverick.com/wp-content/uploads/2021/10/promotional-tote-bags-bills.jpg",
  },
]; // Non-woven bag data

const Bags = () => {
  return (
    <div className="container mx-5 p-2 lg:p-8">
      <h1 className="text-3xl font-semibold mb-4">Woven Bags</h1>
      <BagDisplay bags={wovenBags} />

      <h1 className="text-3xl font-semibold mt-8 mb-4">Non-Woven Bags</h1>
      <BagDisplay bags={nonWovenBags} />
    </div>
  );
};

export default Bags;
