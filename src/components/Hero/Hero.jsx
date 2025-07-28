const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen bg-white lg:flex-row">
      <div className="w-full lg:w-3/5 h-80 lg:h-screen">
        <img
          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A beautifully set dining table with nature-themed art on the wall"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-2/5 bg-[#F5F3EF] flex items-center justify-center">
        <div className="w-full max-w-md p-12 text-left lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3a3a3a] mb-6 tracking-tight">
            Nature's beauty in every photo
          </h1>

          <p className="text-lg text-[#5b5b5b] leading-relaxed mb-10">
            Immerse yourself in the breathtaking world of nature photography as
            we embark on a journey through the majesty of our planet.
          </p>

          <button className="btn bg-[#8C847D] hover:bg-[#7a726b] text-white border-none rounded-full px-10 h-14 min-h-14 text-base font-semibold normal-case">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
