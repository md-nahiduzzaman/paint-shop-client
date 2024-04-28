import { Link } from "react-router-dom";

const SingleCategory = ({ category }) => {
  const { _id, image, subcategory_Name } = category;

  return (
    <div>
      <div>
        <Link to={`/categoryDetails/${subcategory_Name}`}>
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title text-2xl">{subcategory_Name}</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
