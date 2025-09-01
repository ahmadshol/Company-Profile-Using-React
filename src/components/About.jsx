import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";
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
                  src={aboutImg}
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

      <section id="technology" className="py-20 bg-gray-200 dark:bg-dark">
        <div data-aos="fade-up" className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Teknologi & Peralatan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Didukung dengan peralatan canggih dan teknologi terbaru untuk
              hasil kerja yang presisi
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                    Laser Alignment System
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    Sistem penyetelan suspensi presisi menggunakan teknologi
                    laser untuk akurasi maksimal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                    Computerized Diagnostics
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    Diagnosa komputer untuk menganalisa masalah suspensi secara
                    detail dan akurat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                    Dynamic Testing Equipment
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    Peralatan testing dinamik untuk mensimulasikan berbagai
                    kondisi jalan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                    High-Performance Parts
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    Hanya menggunakan suku cadang berkualitas tinggi dan teruji
                    performanya.
                  </p>
                </div>
              </div>
            </div>
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
