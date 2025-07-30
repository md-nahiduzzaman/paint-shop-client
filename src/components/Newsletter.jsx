import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Handle form submission logic here, e.g., send to an API
    console.log("Subscribed with email:", email);
    e.target.reset();
  };

  return (
    <section className="bg-[#F5F3EF] py-20">
      <div className="container px-6 mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800">
            Join our gang today for 10% off
          </h2>

          <p className="mt-4 text-gray-600">
            We'll email you a voucher worth 10% off your first order over $50.
            By subscribing, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-gray-800">
              Terms & Conditions
            </Link>
            .
          </p>

          {/* Newsletter form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              className="w-full max-w-xs bg-white rounded-lg input input-bordered h-14"
            />

            <button
              type="submit"
              className="btn bg-[#8C847D] hover:bg-[#7a726b] text-white border-none rounded-full px-8 h-14 min-h-14 font-semibold w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
