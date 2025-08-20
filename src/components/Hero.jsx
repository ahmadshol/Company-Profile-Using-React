const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-r from-primary to-secondary text-white"
    >
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
              Solusi Suspensi Terbaik untuk Kendaraan Anda
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto fade-in">
              Maestro Suspension menyediakan layanan suspensi profesional untuk
              meningkatkan performa dan kenyamanan berkendara Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Layanan Kami
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
          {/* gambar */}
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="assets/hero.png"
                alt="teamwork"
                className="relative z-10 max-w-ful mx-auto rounded-xl mb-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
