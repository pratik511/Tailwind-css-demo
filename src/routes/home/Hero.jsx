const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[70vh] h-screen relative"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png)`, // Replace with your image URL
        backgroundSize: "cover", // Maintain aspect ratio and cover the entire container
        backgroundPosition: "center", // Center the background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4">
          Discover the Latest Trends
        </h1>
        <p className="text-xl text-white mb-8">
          Shop our exclusive collection now
        </p>
        <a
          href="#shop"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
