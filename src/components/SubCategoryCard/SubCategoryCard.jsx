import { Link } from "react-router-dom";

const SubCategoryCard = ({ item }) => {
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
  } = item;

  return (
    <div className="container mx-auto">
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="sm:h-[350px] p-6 bg-cover"
              src={image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item_name}</h2>
            <h3>{subcategory_Name}</h3>
            <hr />
            <p>{short_description}</p>
            <hr />
            <div>
              <p>Price: {price}</p>
              <p>Rating: {rating}</p>
              <p>Processing Time: {processing_time} Days</p>
            </div>
            <div className="card-actions justify-start">
              <Link to={`/productDetails/${_id}`}>
                <button className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className=" bg-base-100 shadow-xl flex">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{item_name}</h2>
            <h2 className="card-title font-normal">{subcategory_Name}</h2>
            <hr />
            <div className="flex items-center justify-between w-full ">
              <p>Rating: {rating}</p>
              <p>Price: {price}</p>
            </div>
            <hr />
            <div className="card-actions">
              <Link to={`/productDetails/${_id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SubCategoryCard;
