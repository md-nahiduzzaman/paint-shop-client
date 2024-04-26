import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/updateProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const tourists_spot_name = e.target.spot.value;
    const country_Name = e.target.country.value;
    const location = e.target.location.value;
    const short_description = e.target.description.value;
    const average_cost = e.target.cost.value;
    const seasonality = e.target.seasonality.value;
    const travel_time = e.target.time.value;
    const totalVisitorsPerYear = e.target.visitor.value;
    const userEmail = e.target.email.value;
    const userName = e.target.name.value;

    const info = {
      image,
      tourists_spot_name,
      // country_Name,
      // location,
      // short_description,
      // average_cost,
      // seasonality,
      // travel_time,
      // totalVisitorsPerYear,
      // userEmail,
      // userName,
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
      });
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          {/* heading */}
          <div>
            <h1>Add Your product</h1>
          </div>
          <form
            onSubmit={handleUpdateProduct}
            action=""
            className="w-80 grid grid-cols-2 gap-7"
          >
            {/* img url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Img URL</span>
              </label>
              <input
                type="Text"
                placeholder="Image URL"
                className="input input-bordered"
                name="image"
                id="image"
                defaultValue={product.image}
              />
            </div>
            {/* spot name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Spot Name</span>
              </label>
              <input
                type="Text"
                placeholder="Spot Name"
                className="input input-bordered"
                name="spot"
                id="spot"
                defaultValue={product.tourists_spot_name}
              />
            </div>
            {/* country name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="Text"
                placeholder="Country Name"
                className="input input-bordered"
                name="country"
                id="country"
                defaultValue={product.country_Name}
              />
            </div>
            {/* location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="Text"
                placeholder="Location"
                className="input input-bordered"
                name="location"
                id="location"
                defaultValue={product.location}
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="Text"
                placeholder="Description"
                className="input input-bordered"
                name="description"
                id="description"
                defaultValue={product.short_description}
              />
            </div>
            {/* cost */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <input
                type="number"
                placeholder="Average Cost"
                className="input input-bordered"
                name="cost"
                id="cost"
                defaultValue={product.average_cost}
              />
            </div>
            {/* seasonality */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <input
                type="Text"
                placeholder="Seasonality"
                className="input input-bordered"
                name="seasonality"
                id="seasonality"
                defaultValue={product.seasonality}
              />
            </div>
            {/* travel time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input
                type="number"
                placeholder="Travel Time"
                className="input input-bordered"
                name="time"
                id="time"
                defaultValue={product.travel_time}
              />
            </div>
            {/* visitor */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Visitors Per Year</span>
              </label>
              <input
                type="number"
                placeholder="Total Visitors Per Year"
                className="input input-bordered"
                name="visitor"
                id="visitor"
                defaultValue={product.totalVisitorsPerYear}
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
                className="input input-bordered"
                name="email"
                id="email"
                defaultValue={product.userEmail}
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
                className="input input-bordered"
                name="name"
                id="name"
                defaultValue={product.country_Name}
              />
            </div>
            {/* btn */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
