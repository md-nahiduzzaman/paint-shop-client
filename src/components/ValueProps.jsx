import {
  IoCameraOutline,
  IoEaselOutline,
  IoRepeat,
  IoColorPaletteOutline,
} from "react-icons/io5";

// Storing feature data in an array makes the component cleaner and easier to update.
const featuresData = [
  {
    icon: <IoCameraOutline size={32} className="text-gray-700" />,
    title: "Clear & sharp",
    description:
      "Our photography products feature high-resolution images, ensuring exceptional clarity and detail.",
  },
  {
    icon: <IoEaselOutline size={32} className="text-gray-700" />,
    title: "Easy to frame",
    description:
      "Our photos come with easy-to-use mounting options, making it a breeze to display your images.",
  },
  {
    icon: <IoRepeat size={32} className="text-gray-700" />,
    title: "Simple returns",
    description:
      "We offer an easy and straightforward returns process, ensuring your satisfaction and peace of mind.",
  },
  {
    icon: <IoColorPaletteOutline size={32} className="text-gray-700" />,
    title: "Vivid colors",
    description:
      "Our products are designed to highlight and amplify vivid colors with unparalleled vibrancy and brilliance.",
  },
];

const ValueProps = () => {
  return (
    <section className="bg-[#F9F8F6] py-20">
      <div className="container px-6 mx-auto">
        {/* A responsive grid that displays 2 columns on large screens and 1 column on mobile. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-20">
          {featuresData.map((feature, index) => (
            // Each feature item uses Flexbox for alignment between the icon and text.
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">{feature.icon}</div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
