import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {/* section title */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold sm:w-[40%] mb-6">
          Explore Painting and Drawing Masterpieces!
        </h1>
      </div>

      <div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sub Category</th>
                  <th>Price</th>
                  {/* <th>Stock Status</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.item_name}</td>
                    <td>{item.subcategory_Name}</td>
                    <td>{item.price} BDT</td>
                    {/* <td>{item.stockStatus}</td> */}
                    <td>
                      <div className="flex gap-4">
                        <Link to={`/productDetails/${item._id}`}>
                          <button className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
