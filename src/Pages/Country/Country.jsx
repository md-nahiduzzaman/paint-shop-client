const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <div>
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {country.country_Name}
              </h2>
              <p className="text-gray-100 dark:text-gray-800">
                {country.short_description}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
