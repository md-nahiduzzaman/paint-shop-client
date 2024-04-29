import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [control, setControl] = useState(false);

  // const {
  //   _id,
  //   image,
  //   tourists_spot_name,
  //   country_Name,
  //   location,
  //   short_description,
  //   average_cost,
  //   seasonality,
  //   travel_time,
  //   totalVisitorsPerYear,
  //   userEmail,
  //   userName,
  // } = product;

  // const handleDelete = (id) => {
  //   fetch(`https://tripbd-server.vercel.app/delete/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         setControl(!control);
  //       }
  //     });
  // };

  const {
    _id,
    image,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    userEmail,
    userName,
  } = product;

  return (
    <div className="m-6">
      {/* <div>
        <Link to={`/updateProduct/${product._id}`}>
          <button className="btn">Update</button>
        </Link>

        <button onClick={() => handleDelete(product._id)} className="btn">
          Delete
        </button>
      </div> */}
      <Bounce>
        <div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">{item_name}</h2>
              <h2 className="card-title font-normal">{subcategory_Name}</h2>
              <hr />
              <div className="flex items-center gap-7 w-full ">
                <p>Price: {price} BDT</p>
              </div>
              <hr />
              <div className="card-actions">
                <Link to={`/productDetails/${_id}`}>
                  <button className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Product;
