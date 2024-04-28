const Gallery = () => {
  return (
    <>
      <div>
        {/* section title */}
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold w-[40%] mb-6">
            Explore Our Gallery
          </h1>
          <p className=" w-[60%] mb-10">
            Embark on an enriching journey through our diverse gallery, where
            each masterpiece tells a unique story of creativity and passion.
            From captivating paintings to intricate sculptures, immerse yourself
            in a world of artistry and inspiration.
          </p>
        </div>

        <section className="py-6  dark:bg-gray-100 text-gray-50 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4  mx-auto md:grid-cols-4">
            <img
              src="https://source.unsplash.com/random/301x301/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded-2xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?0"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?1"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?2"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?3"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
