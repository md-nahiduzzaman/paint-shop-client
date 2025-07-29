import { useState, useEffect } from "react";

const CountdownBanner = () => {
  const calculateTargetDate = () => {
    const target = new Date();
    target.setHours(target.getHours() + 10);
    return target;
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = calculateTargetDate();
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / 1000 / 60) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 mx-auto my-20 ">
      <div
        className="relative overflow-hidden text-center text-white bg-center bg-cover rounded-lg"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661887261892-1929564076a5?q=80&w=1258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-start p-12 md:p-20">
          <h2 className="text-4xl font-light tracking-wide md:text-6xl">
            The 40% off sale starts soon
          </h2>

          <p className="mt-2 text-lg font-light opacity-80">
            (plus, free shipping on everything in the sale)
          </p>

          <div className="flex items-center gap-6 mt-8 md:gap-8">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl countdown md:text-7xl">
                <span style={{ "--value": timeLeft.hours }}></span>
              </span>
              <span className="mt-1 text-xs tracking-widest uppercase opacity-70">
                Hours
              </span>
            </div>

            {/* Separator */}
            <span className="-mt-4 text-5xl opacity-50">|</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl countdown md:text-7xl">
                <span style={{ "--value": timeLeft.minutes }}></span>
              </span>
              <span className="mt-1 text-xs tracking-widest uppercase opacity-70">
                Minutes
              </span>
            </div>

            {/* Separator */}
            <span className="-mt-4 text-5xl opacity-50">|</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl countdown md:text-7xl">
                <span style={{ "--value": timeLeft.seconds }}></span>
              </span>
              <span className="mt-1 text-xs tracking-widest uppercase opacity-70">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownBanner;
