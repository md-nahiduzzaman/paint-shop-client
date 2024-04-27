import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [control, setControl] = useState(false);

  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    userEmail,
    userName,
  } = product;

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:5000/delete/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         setControl(!control);
  //       }
  //     });
  // };

  return (
    <div className="border m-6">
      <h1>{tourists_spot_name}</h1>
      {/* <div>
        <Link to={`/updateProduct/${product._id}`}>
          <button className="btn">Update</button>
        </Link>

        <button onClick={() => handleDelete(product._id)} className="btn">
          Delete
        </button>
      </div> */}
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{tourists_spot_name}</h2>
            <p>Average Cost: BDT {average_cost}</p>
            <p>Total Visitors: {totalVisitorsPerYear}/year</p>
            <p>Travel Time: {travel_time} Days</p>
            <p>Seasonality: {seasonality} Days</p>
            <div className="card-actions">
              <Link to={`/productDetails/${_id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
