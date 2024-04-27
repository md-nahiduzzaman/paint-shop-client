const EmailSubscription = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div
          className="hero h-[30vh]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
            borderRadius: "24px",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Get Our Updates</h1>
              <p className="mb-5">Find out about events and other news</p>
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
