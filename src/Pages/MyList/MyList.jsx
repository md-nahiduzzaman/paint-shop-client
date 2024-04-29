import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useAuth();
  console.log(user);
  const [items, setItems] = useState([]);
  // const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);

  const sortData = (sortBy) => {
    let sortData = [...items];
    if (sortBy === "customization") {
      sortData.sort((a, b) => {
        if (a.customization === "Yes" && b.customization === "No") {
          return 1;
        } else if (a.customization === "No" && b.customization === "Yes") {
          return -1;
        } else {
          return 0;
        }
      });
    }
    setItems(sortData);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // setControl(!control);
              console.log("deleted sucessfully");
              const remainItems = items.filter((item) => item._id !== id);
              setItems(remainItems);
            }
          });
      }
    });
  };

  useEffect(() => {
    document.title = "CraftBD | My Art & Carft";
  }, []);

  return (
    <div className="container mx-auto">
      {/* section title */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold sm:w-[40%] mb-6">
          Explore Our Art Items Collection!
        </h1>
        <p className=" sm:w-[60%] mb-10">
          Unlock endless crafting possibilities with our curated selection of
          craft items. From paints and brushes to sketch pads and more, we have
          everything you need to bring your artistic visions to life.
        </p>
      </div>

      {/* sort function */}
      <div className="flex text-center items-center justify-center mb-16">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => sortData("customization")}>
                Customization Ascending
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 ">
        {items.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.item_name}</h2>
              <div>
                <p>Price: BDT {item.price} </p>
                <p>Rating: {item.rating} </p>
              </div>
              <div>
                <p>Customization: {item.customization} </p>
                <p>Stock Status: {item.stockStatus} </p>
              </div>

              <div className="card-actions justify-start">
                <Link to={`/updateProduct/${item._id}`}>
                  <button className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn rounded-2xl text-white bg-[#b18b5e] hover:bg-[#856640]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
