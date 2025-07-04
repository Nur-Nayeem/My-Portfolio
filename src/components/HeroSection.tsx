interface HeroSectionProps {
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({
  darkMode,
  scrollToSection,
}:HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 opacity-10"></div>
        <img
          src="https://res.cloudinary.com/dx43z0uml/image/upload/v1750931132/8640a474ed679be89f0709c11b3927ba_mklawb.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"
          }`}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="block">Nur Nayeem</span>
            <span
              className={`block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ${
                darkMode
                  ? "from-purple-400 to-pink-400"
                  : "from-purple-600 to-pink-600"
              }`}
            >
              MERN Stack Developer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 leading-relaxed">
            Building modern web applications with React, Node.js, Express, and
            MongoDB.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 !rounded-button cursor-pointer whitespace-nowrap"
          >
            View My Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
