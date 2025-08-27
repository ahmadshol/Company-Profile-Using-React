import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import imgTim1 from "/assets/tim1.avif";
import imgTim2 from "/assets/tim2.avif";
import imgTim3 from "/assets/testi3.avif";
import imgTim4 from "/assets/tim3.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  useEffect(() => {
      AOS.init({ once: true, duration: 800 });
    }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

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

  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "Founder & CEO",
      image: imgTim1,
      expertise: "Suspension Specialist",
    },
    {
      name: "Sari Wijaya",
      position: "Head Technician",
      image: imgTim2,
      expertise: "Performance Tuning",
    },
    {
      name: "Agus Pratama",
      position: "Senior Mechanic",
      image: imgTim3,
      expertise: "Suspension Design",
    },
    {
      name: "Dewi Lestari",
      position: "Customer Service",
      image: imgTim4,
      expertise: "Client Relations",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="top py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
      >
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-secondary/5 transform -skew-y-3 -translate-y-24"></div>

        <div
          data-aos="fade-down"
          className="container mx-auto mt-20 px-6 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 dark:text-white fade-in">
              Tentang <span className="text-primary">Kami</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full fade-in"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto dark:text-white fade-in">
              Perjalanan dan dedikasi kami dalam memberikan solusi suspensi
              terbaik
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 fade-in">
            <div
              data-aos="fade-right"
              ref={imageContainerRef}
              className="lg:w-1/2 relative group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src="assets/img1.jpg"
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
            <div data-aos="fade-left" className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 dark:text-white">
                Perjalanan <span className="text-primary">Kami</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg dark:text-white">
                Maestro Suspension didirikan pada tahun 2010 dengan visi
                memberikan solusi suspensi terbaik untuk semua jenis kendaraan.
                Kami telah berkembang menjadi spesialis terkemuka di industri
                otomotif dengan fokus pada kualitas dan kepuasan pelanggan.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg dark:text-white">
                Dengan pengalaman lebih dari satu dekade, kami telah melayani
                ribuan pelanggan dengan berbagai kebutuhan suspensi, dari
                kendaraan sehari-hari hingga kendaraan performa tinggi dan
                balap.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-gray-600 transition-shadow duration-300 dark:bg-dark">
                  <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                    1000+
                  </h4>
                  <p className="text-gray-600 font-medium">Proyek Selesai</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-gray-600 transition-shadow duration-300 dark:bg-dark">
                  <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                    500+
                  </h4>
                  <p className="text-gray-600 font-medium">Klien Bahagia</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-gray-600 transition-shadow duration-300 dark:bg-dark">
                  <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                    98%
                  </h4>
                  <p className="text-gray-600 font-medium">Kepuasan Klien</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-gray-600 transition-shadow duration-300 dark:bg-dark">
                  <h4 className="text-primary text-3xl md:text-4xl font-bold mb-2">
                    15+
                  </h4>
                  <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gray-200 dark:bg-dark">
        <div data-aos="fade-up" className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Tim Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Tim profesional kami siap memberikan pelayanan terbaik untuk
              solusi suspensi kendaraan Anda.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 text-center dark:bg-gray-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover hover:scale-95 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm dark:text-white">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Berminat?
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              jika Anda memiliki pertanyaan atau ingin mendiskusikan kebutuhan
              suspensi Anda, jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                to="/contact"
                className="mt-10 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition duration-300 my-4"
              >
                Hubungi Kami
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 inline-block ml-2 fill-current"
                  >
                    <title>Accenture</title>
                    <path d="m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
