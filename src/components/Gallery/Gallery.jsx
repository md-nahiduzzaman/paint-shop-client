const Gallery = () => {
  return (
    <>
      <div>
        {/* section title */}
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:w-[40%] mb-6">
            Explore Our Gallery
          </h1>
          <p className=" sm:w-[60%] mb-10">
            Embark on an enriching journey through our diverse gallery, where
            each masterpiece tells a unique story of creativity and passion.
            From captivating paintings to intricate sculptures, immerse yourself
            in a world of artistry and inspiration.
          </p>
        </div>

        <section className="py-6  dark:bg-gray-100 text-gray-50 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4  mx-auto md:grid-cols-4">
            <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded-2xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1579273168832-1c6639363dad?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1582125169522-5b10e447ebd6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded-2xl shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1583502070955-f195c352ff30?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
