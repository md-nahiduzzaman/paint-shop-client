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

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setControl(!control);
        }
      });
  };

  return (
    <div className="border m-6">
      <h1>{tourists_spot_name}</h1>
      <div>
        <Link to={`/updateProduct/${product._id}`}>
          <button className="btn">Update</button>
        </Link>

        <button onClick={() => handleDelete(product._id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
