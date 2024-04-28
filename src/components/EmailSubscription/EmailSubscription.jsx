const EmailSubscription = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div
          className="hero h-[40vh]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579167728952-4b541b70767c?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            borderRadius: "24px",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="text-6xl font-bold mb-8">Get Our Updates</h1>

              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-3/5 p-3  sm:w-2/3 rounded-2xl"
                />
                <button
                  type="button"
                  className="w-2/5 p-3 font-semibold  sm:w-1/3 text-black bg-[#f7cd1b] border-none hover:bg-[#07b682] rounded-2xl"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSubscription;
