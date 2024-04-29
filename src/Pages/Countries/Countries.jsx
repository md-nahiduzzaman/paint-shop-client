import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("https://tripbd-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <h1>this is Countries: {countries.length} </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {countries.map((country) => (
          <Country key={country._id} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
