/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import UpdateGasModal from "./UpdateGasModal";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { authContext } from "../../../context/UserContext";
import LoadingSpinner from "../../shared/loading/Loading";

const DashGasProduct = ({ data, refetch }) => {
  const { loading, Setloading } = useContext(authContext);
  const {
    picture,
    Brand,
    name,
    offer,
    price,
    quantity,
    valveSize,
    use,
    valveType,
    _id,
  } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  const handleDelete = (id) => {
    Setloading(true);
    AxiosBaseURL.delete(`/gasservice/${id}`)
      .then((data) => {
        console.log(data.data);
        refetch();
      })
      .catch((err) => {
        console.error(err);
      });
    Setloading(false);
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {data && (
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-80" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              {offer?.isOffer && (
                <div className="badge badge-secondary">Offer</div>
              )}
            </h2>
            <p>
              Quantity : <span>{quantity}</span>
            </p>
            <p>
              Valve Size : <span>{valveSize}</span>
            </p>
            <p>
              Valve Type : <span>{valveType}</span>
            </p>
            <p>
              Use For : <span>{use}</span>
            </p>
            <p>
              Brand : <span>{Brand}</span>
            </p>
            <p>
              Price : <span>{price}</span>
            </p>
            {offer?.isOffer && (
              <p>
                Offer Price : <span>{price - offer.lessPrice}</span>
              </p>
            )}
            <div className="flex justify-end gap-1">
              <button onClick={openModal} className="btn btn-sm btn-secondary">
                Update
              </button>
              <button
                onClick={() => {
                  handleDelete(data._id);
                }}
                className="btn btn-sm btn-secondary"
              >
                Delete
              </button>
            </div>
            <UpdateGasModal
              refetch={refetch}
              data={data}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DashGasProduct;
