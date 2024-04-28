import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

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

  useEffect(() => {
    fetch(`http://localhost:5000/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="container mx-auto">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full   dark:bg-gray-50">
            <img
              src={image}
              alt=""
              className="object-cover w-full  rounded-2xl sm:h-[500px] "
            />
            <div className="p-6 space-y-2 mb-10">
              <div className="pb-6">
                <h1 className="font-bold text-5xl mb-4">{item_name}</h1>
                <p className="font-semibold text-5xl ">{price} BDT</p>
              </div>

              <hr />

              <div className="pt-2 pb-2">
                <h1 className="font-bold">{subcategory_Name}</h1>
              </div>
              <hr />
              <div className="pt-2 pb-2">
                <p className="text-base ">
                  <span className="font-bold">Description: </span>
                  {short_description}
                </p>
              </div>
              <hr />

              <div className="pt-2 pb-2">
                <h3 className="font-bold pb-4">Specification</h3>
                <div className="overflow-x-auto">
                  <table className="table sm:w-[50%] ">
                    <tbody className="">
                      <tr className="border-none">
                        <td className="p-0 pb-4">Rating:</td>
                        <td className="p-0 pb-4 font-semibold">{rating}</td>
                      </tr>

                      <tr className="border-none">
                        <td className="p-0 pb-4">Customization:</td>
                        <td className="p-0 pb-4 font-semibold">
                          {customization}
                        </td>
                      </tr>

                      <tr className="border-none">
                        <td className="p-0 pb-4">Processing Time:</td>
                        <td className="p-0 pb-4 font-semibold">
                          {processing_time} Days
                        </td>
                      </tr>

                      <tr className="border-none">
                        <td className="p-0 pb-4">Stock Status:</td>
                        <td className="p-0 pb-4 font-semibold">
                          {stockStatus}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
