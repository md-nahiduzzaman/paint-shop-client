import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UpdateProduct = () => {
  const { user } = useAuth();
  console.log(user);

  const { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/updateProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const item_name = e.target.itemName.value;
    const subcategory_Name = e.target.subcategoryName.value;

    const short_description = e.target.shortDescription.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processing_time = e.target.processingTime.value;

    const stockStatus = e.target.stockStatus.value;

    const userEmail = e.target.email.value;
    const userName = e.target.name.value;

    const info = {
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
    };

    console.log(info);

    fetch(`http://localhost:5000/updateProduct/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Update Successfully!");
      });
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          {/* heading */}
          <div className="mt-8 mb-8">
            <h1 className="text-center text-4xl font-bold">Update Item</h1>
          </div>
          <div className="w-3/4 mx-auto mb-9">
            <form
              onSubmit={handleUpdateProduct}
              action=""
              className="grid grid-cols-2 gap-7"
            >
              {/* img url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Img URL</span>
                </label>
                <input
                  type="Text"
                  placeholder="Image URL"
                  className="input input-bordered rounded-2xl"
                  name="image"
                  id="image"
                  defaultValue={product?.image}
                />
              </div>
              {/* item name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="Text"
                  placeholder="Item Name"
                  className="input input-bordered rounded-2xl"
                  name="itemName"
                  id="itemName"
                  defaultValue={product?.item_name}
                />
              </div>
              {/* subcategory name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <input
                  type="Text"
                  placeholder="Subcategory Name"
                  className="input input-bordered rounded-2xl"
                  name="subcategoryName"
                  id="subcategoryName"
                  defaultValue={product?.subcategory_Name}
                />
              </div>
              {/* description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="Text"
                  placeholder="Short Description"
                  className="input input-bordered col-span-2 rounded-2xl"
                  name="shortDescription"
                  id="shortDescription"
                  defaultValue={product?.short_description}
                />
              </div>
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered rounded-2xl"
                  name="price"
                  id="price"
                  defaultValue={product?.price}
                />
              </div>
              {/* rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered rounded-2xl"
                  name="rating"
                  id="rating"
                  defaultValue={product?.rating}
                />
              </div>
              {/* customization */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <input
                  type="text"
                  placeholder="Customization (Yes/No)"
                  className="input input-bordered rounded-2xl"
                  name="customization"
                  id="customization"
                  defaultValue={product?.customization}
                />
              </div>
              {/* processing time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  type="number"
                  placeholder="Processing Time"
                  className="input input-bordered rounded-2xl"
                  name="processingTime"
                  id="processingTime"
                  defaultValue={product?.processing_time}
                />
              </div>
              {/* stock Status  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status </span>
                </label>
                <input
                  type="text"
                  placeholder="Stock Status (In Stock / Made to Order) "
                  className="input input-bordered rounded-2xl"
                  name="stockStatus"
                  id="stockStatus"
                  defaultValue={product?.stockStatus}
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="User Email"
                  className="input input-bordered rounded-2xl"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                />
              </div>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="Text"
                  placeholder="User Name"
                  className="input input-bordered rounded-2xl"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                />
              </div>
              {/* btn */}
              <div className="form-control col-span-2 mb-9">
                <button
                  type="submit"
                  className="btn bg-[#f7cd1b] border-none hover:bg-[#07b682] col-span-2 rounded-2xl"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
