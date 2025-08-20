import { useState, useRef, useEffect } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageContainerRef.current) return;

      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = Math.min(Math.max((x / rect.width - 0.5) * 2, -1), 1);
      const yPercent = Math.min(Math.max((y / rect.height - 0.5) * 2, -1), 1);

      setMousePosition({ x: xPercent, y: yPercent });
    };

    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const transformStyle = {
    transform: `translate(
      ${mousePosition.x * 20}px, 
      ${mousePosition.y * 20}px
    ) rotate3d(
      ${mousePosition.y}, 
      ${-mousePosition.x}, 
      0, 
      ${
        Math.sqrt(
          mousePosition.x * mousePosition.x + mousePosition.y * mousePosition.y
        ) * 4
      }deg
    )`,
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-secondary/5 transform -skew-y-3 -translate-y-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-primary">Kami</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Perjalanan dan dedikasi kami dalam memberikan solusi suspensi
            terbaik
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div
            ref={imageContainerRef}
            className="lg:w-1/2 relative group cursor-pointer"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:shadow-2xl">
              <img
                src="assets/about.jpg"
                alt="Tentang Maestro Suspension"
                className="w-full h-auto rounded-2xl transition-transform duration-300 ease-out"
                style={transformStyle}
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white py-2 px-6 rounded-full shadow-lg transform rotate-3">
              <span className="font-bold">Sejak 2010</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Perjalanan <span className="text-primary">Kami</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Maestro Suspension didirikan pada tahun 2010 dengan visi
              memberikan solusi suspensi terbaik untuk semua jenis kendaraan.
              Kami telah berkembang menjadi spesialis terkemuka di industri
              otomotif dengan fokus pada kualitas dan kepuasan pelanggan.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Dengan pengalaman lebih dari satu dekade, kami telah melayani
              ribuan pelanggan dengan berbagai kebutuhan suspensi, dari
              kendaraan sehari-hari hingga kendaraan performa tinggi dan balap.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                  1000+
                </h4>
                <p className="text-gray-600 font-medium">Proyek Selesai</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                  500+
                </h4>
                <p className="text-gray-600 font-medium">Klien Bahagia</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                  98%
                </h4>
                <p className="text-gray-600 font-medium">Kepuasan Klien</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                  15+
                </h4>
                <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
