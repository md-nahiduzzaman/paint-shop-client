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

  return (
    <div>
      <h1>this is my list</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Spot Name</th>
                <th>Country Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.tourists_spot_name}</td>
                  <td>{item.country_Name}</td>
                  <td>
                    <div className="flex gap-4">
                      <Link to={`/updateProduct/${item._id}`}>
                        <button className="btn">Update</button>
                      </Link>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
