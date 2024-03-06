const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[70vh] max-h-[80vh] relative"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png)`, // Replace with your image URL
        backgroundSize: "cover", // Maintain aspect ratio and cover the entire container
        backgroundPosition: "center", // Center the background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center h-full mx-auto text-center">
        <h1 className="mb-4 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Discover the Latest Trends
        </h1>
        <p className="mb-8 text-xl text-white">
          Shop our exclusive collection now
        </p>
        <a
          href="#shop"
          className="px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-yellow-500 rounded-full hover:bg-yellow-600 md:text-xl"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
