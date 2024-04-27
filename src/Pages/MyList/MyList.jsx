import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useAuth();
  console.log(user);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user]);

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
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <div className="flex gap-4">
                    <button className="btn">Update</button>
                    <button className="btn">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {item?.map((p) => (
          <div>
            <h1>id: {p._id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
