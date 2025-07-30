// An array of image URLs for the gallery. Using high-quality placeholders.
const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1706287679114-6a9ca17fe9c5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1706152482843-e8da9cfef167?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1642455680602-7b4ddf7560a4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1634954230878-4b0174e50a7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PhotoGallery = () => {
  return (
    <section className="py-4 bg-white">
      <div className="px-4 mx-auto ">
        {/* A responsive grid layout for the images. */}
        {/* It displays 2 columns on small screens, 3 on medium, and 5 on large screens. */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
