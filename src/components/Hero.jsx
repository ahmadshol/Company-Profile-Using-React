import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import imgTesti1 from "/assets/testi1.avif";
import imgTesti2 from "/assets/testi2.avif";
import imgTesti3 from "/assets/testi3.avif";


const Hero = () => {
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
            mousePosition.x * mousePosition.x +
              mousePosition.y * mousePosition.y
          ) * 4
        }deg
      )`,
  };

  const testimonials = [
    {
      quote: "Pelayanan Bagus rapi & cepat biaya aman di kantong.",
      author: "Mas Wahyono",
      position: "Pemilik Toyota Fortuner",
      image: imgTesti1,
    },
    {
      quote:
        "Service dari karyawan ok banget, kualitas Per gak kalah sama brand yg lebih mahal.",
      author: "Linda Sari",
      position: "Pemilik Honda CR-V",
      image: imgTesti2,
    },
    {
      quote:
        "Bengkelnya lokasi pinggir jalan, depan BRI. Pelayanan ramah dan cepat, pegawainya banyak jadi satset dan pastinya profesional bgt. Rekomen sekali buat bengkel apalagi khusus kaki-kaki.",
      author: "Rudi Hartono",
      position: "Pemilik Mitsubishi Pajero",
      image: imgTesti3,
    },
  ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3jkthpd",
        "template_gwfcxng",
        {
          from_email: formData.email,
        },
        "PAVLgwtUyB49mdZzX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan berhasil dikirim!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan, silakan coba lagi.");
        }
      );
  };

  return (
    <>
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
                Maestro Suspension menyediakan layanan suspensi profesional
                untuk meningkatkan performa dan kenyamanan berkendara Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
                <Link
                  to="/services"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Layanan Kami
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
            {/* gambar */}
            <div data-aos="fade-up" className="w-full self-end px-4 lg:w-1/2">
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

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-secondary/5 transform -skew-y-3 -translate-y-24"></div>

        <div
          data-aos="fade-down"
          className="container mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Content */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 dark:text-white">
                Solusi untuk{" "}
                <span className="text-primary">Kenyamanan kendaraan anda</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg dark:text-white">
                Sebagai Maestro Suspension, kami paham betul tantangan yang
                dihadapi para pecinta otomotif dan bengkel dalam menemukan
                solusi berkendara yang nyaman dan handal. Untuk itu, kami
                menghadirkan rangkaian produk suspensi unggulan yang dirancang
                khusus untuk meningkatkan stabilitas kendaraan Anda,
                menyesuaikan dengan berbagai kebutuhan berkendara, dan
                memberikan pengalaman menyetir yang lebih mulus. Percayakan pada
                kami untuk mendampingi setiap perjalanan Anda dengan solusi yang
                tepat dan berkinerja terbaik.
              </p>

              {/* Stats */}
              <div className="space-y-5">
                <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  <div className="bg-blue-100 text-primary p-2 rounded-md">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4h12v2H4V4zm0 4h8v2H4V8zm0 4h12v2H4v-2zm0 4h8v2H4v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Produk Suspensi Unggulan
                    </h4>
                    <p className="text-sm text-gray-600">
                      Kualitas teruji untuk kenyamanan dan performa optimal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  <div className="bg-blue-100 text-primary p-2 rounded-md">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 11h-2V9h2zm0-4h-2V7h2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Kualitas Terpercaya
                    </h4>
                    <p className="text-sm text-gray-600">
                      Produk kami telah teruji dan dipercaya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  <div className="bg-blue-100 text-primary p-2 rounded-md">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2C6.13 2 2 4 2 7v6c0 3 4.13 5 8 5s8-2 8-5V7c0-3-4.13-5-8-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Kenyamanan Maksimal
                    </h4>
                    <p className="text-sm text-gray-600">
                      Digarap oleh para ahli di bidang suspensi
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            Mengapa Harus{" "}
            <span className="text-primary">Maestro Suspension</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto dark:text-white">
            Kami Berkomitmen untuk memberikan layanan dan produk terbaik bagi
            pelanggan kami.
          </p>
        </div>
        {/* stats */}
        <div className="justify-center flex gap-6 md:gap-8 container mx-auto px-6 flex-wrap">
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
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div data-aos="fade-down" className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Testimonial Pelanggan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-white">
              Lihat apa kata pelanggan kami tentang layanan dan kualitas kerja
              Maestro Suspension.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md relative dark:bg-dark">
              <svg
                className="w-12 h-12 text-blue-100 absolute -top-4 -left-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8 italic dark:text-white">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-primary text-sm">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md mr-2 hover:bg-gray-100 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md ml-2 hover:bg-gray-100 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
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

      <footer className="bg-gray-800 text-white pt-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Maestro Suspension</h3>
              <p className="text-gray-400 mb-4">
                Penyedia solusi suspensi terpercaya sejak 2010. Memberikan
                kenyamanan dan keamanan terbaik untuk perjalanan Anda.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maestro_suspension/#"
                  target="blank"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.630c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.630zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/home"
                    className="text-gray-400 hover:text-white transition duration-300 text-left"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition duration-300 text-left"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition duration-300 text-left"
                  >
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition duration-300 text-left"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Perbaikan Suspensi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Diagnosis Gratis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Sparepart Original
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Custom Suspensi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Konsultasi Teknis
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Berlangganan newsletter kami untuk mendapatkan informasi terbaru
                dan penawaran spesial.
              </p>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Anda"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-secondary transition duration-300"
                >
                  OK
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Project Master. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
