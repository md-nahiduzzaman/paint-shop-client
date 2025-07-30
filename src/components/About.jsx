import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto ">
        {/* Main container using Flexbox for responsive layout. */}
        {/* Stacks vertically on mobile (flex-col) and becomes a row on large screens (lg:flex-row). */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image container: takes full width on mobile, 50% on large screens. */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1494442182929-0f8be054d08c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A close-up of a dandelion in a bedroom setting"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          {/* Text content container: takes full width on mobile, 50% on large screens. */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-800">
              Rewild your space
            </h2>
            <p className="max-w-lg mx-auto mt-4 leading-relaxed text-gray-600 lg:mx-0">
              Embrace the allure of lush greenery, the soothing sounds of
              flowing water, and the vibrant colors of blooming flora, all
              thoughtfully integrated into your living space.
            </p>

            <div className="mt-8">
              <Link
                to="/collections/nature"
                className="px-8 rounded-full btn btn-outline"
              >
                Nature prints
              </Link>
            </div>
          </div>
        </div>

        {/* Main container using Flexbox for responsive layout. */}
        {/* Stacks vertically on mobile (flex-col) and becomes a row on large screens (lg:flex-row). */}
        <div className="flex flex-col items-center gap-12 mt-16 lg:flex-row lg:gap-20">
          {/* Text content container: takes full width on mobile, 50% on large screens. */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-800">
              Rewild your space
            </h2>
            <p className="max-w-lg mx-auto mt-4 leading-relaxed text-gray-600 lg:mx-0">
              Embrace the allure of lush greenery, the soothing sounds of
              flowing water, and the vibrant colors of blooming flora, all
              thoughtfully integrated into your living space.
            </p>

            <div className="mt-8">
              <Link
                to="/collections/nature"
                className="px-8 rounded-full btn btn-outline"
              >
                Nature prints
              </Link>
            </div>
          </div>

          {/* Image container: takes full width on mobile, 50% on large screens. */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1494442182929-0f8be054d08c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A close-up of a dandelion in a bedroom setting"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
