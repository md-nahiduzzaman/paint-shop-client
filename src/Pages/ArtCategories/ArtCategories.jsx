import { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const ArtCategories = () => {
  const [categories, setCategories] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {categories.map((category) => (
          <SingleCategory
            key={category._id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default ArtCategories;
