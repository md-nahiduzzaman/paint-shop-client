import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();
  console.log(user);

  //form submit
  const handleAddProduct = (e) => {
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

    console.log(
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
      userName
    );

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

    //add product

    // fetch("http://localhost:5000/addProduct", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(info),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Add item Successfully!");
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="">
          {/* heading */}
          <div className="mt-8 mb-8">
            <h1 className="text-center text-4xl font-bold">Add Your Item</h1>
          </div>
          <div className="w-3/4 mx-auto mb-9">
            <form
              onSubmit={handleAddProduct}
              action=""
              className="sm:grid sm:grid-cols-2 sm:gap-6 "
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
                  defaultValue={user.email}
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
                  defaultValue={user.displayName}
                />
              </div>
              {/* btn */}
              <div className="form-control col-span-2 mt-7 ">
                <button
                  type="submit"
                  className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
