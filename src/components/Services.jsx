import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, []);

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Perbaikan Suspensi",
      description:
        "Layanan perbaikan suspensi komprehensif untuk semua jenis kendaraan dengan garansi resmi.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <title>Helix</title>
          <path d="M12.968 4.97 4.364 0v3.55c0 .449.239.863.627 1.087l4.276 2.47zm5.339 3.083-3.7 2.138 4.86 2.807c.11-.19.17-.407.17-.633V9.552c0-.452-.241-.87-.633-1.096zm1.33 12.397c0-.449-.24-.863-.627-1.087l-4.253-2.456-3.7 2.137L19.637 24zm-13.92-4.49 3.7-2.137c-2.703-1.562-4.884-2.82-4.884-2.82a1.26 1.26 0 0 0-.17.632v2.813c0 .452.242.87.634 1.096zm-.287-1.252a.93.93 0 0 1 .343-.342l12.455-7.194-.01.007.786-.455c.392-.226.633-.643.633-1.096V2.815c0-.452-.241-.87-.633-1.096l-.765-.442a.944.944 0 0 1-.005 1.617l-.006.004-13.231 7.641a1.26 1.26 0 0 0-.633 1.096v2.813c0 .453.24.87.633 1.096l.72.416h.002a.944.944 0 0 1-.29-1.252m12.873-6.652a.945.945 0 0 1-.07 1.575l-.005.004-13.231 7.641a1.26 1.26 0 0 0-.633 1.096v2.813c0 .452.24.87.633 1.096l.765.442a.945.945 0 0 1 .01-1.62l12.456-7.194-.01.006.786-.454c.392-.226.633-.644.633-1.096V9.552c0-.453-.241-.87-.633-1.096l-.697-.403z" />
        </svg>
      ),
      title: "Lowring kit/Per Racing",
      description:
        "Dapat Melayani Custom Suspensi sesuai kebutuhan dan preferensi pengendara untuk performa optimal.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Sparepart Original",
      description:
        "Menyediakan sparepart suspensi original dengan kualitas terbaik dan harga kompetitif.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M10.98 0c-.235 0-.425.2-.425.446V8.92c0 .246-.19.446-.425.446h-.704c-.346 0-.547.41-.346.705l2.574 3.782c.17.25.522.25.692 0l2.574-3.782c.201-.295 0-.705-.346-.705h-.704a.436.436 0 0 1-.425-.446V.446A.436.436 0 0 0 13.02 0ZM7.387 1.562a.732.732 0 0 0-.405.161l-1.096.883a.77.77 0 0 0-.123 1.066.735.735 0 0 0 1.045.126l1.096-.882a.77.77 0 0 0 .123-1.067.738.738 0 0 0-.64-.287Zm9.346 0a.737.737 0 0 0-.64.287.77.77 0 0 0 .123 1.067l1.096.882c.323.26.79.204 1.045-.126a.77.77 0 0 0-.123-1.066l-1.096-.883a.733.733 0 0 0-.405-.16ZM3.039 6.036a.745.745 0 0 0-.675.48l-.512 1.326c-.15.39.037.831.42.985a.74.74 0 0 0 .965-.428l.512-1.325a.765.765 0 0 0-.419-.985.728.728 0 0 0-.291-.053Zm18.042 0a.738.738 0 0 0-.29.053.765.765 0 0 0-.42.985l.512 1.325a.74.74 0 0 0 .965.428.765.765 0 0 0 .42-.985l-.512-1.325a.745.745 0 0 0-.675-.481ZM0 12a12 12 0 0 0 .913 4.592 11.997 11.997 0 0 0 2.42 3.703c.684-.681 1.565-1 2.489-1.053.925-.055 1.893.156 2.745.532a8.497 8.497 0 0 0 6.866 0c1.702-.751 3.865-.843 5.234.52a11.997 11.997 0 0 0 2.42-3.702A12 12 0 0 0 24 12h-3.687c-1.301 0-2.315 1.094-2.813 2.296a6 6 0 0 1-11.087 0C5.915 13.094 4.902 12 3.601 12Zm5.875 7.769c-.727.04-1.407.275-1.957.727-.073.06-.14.119-.204.18a11.997 11.997 0 0 0 3.694 2.41 12 12 0 0 0 9.184 0 11.997 11.997 0 0 0 3.694-2.41 3.977 3.977 0 0 0-.204-.18c-1.173-.963-2.96-.892-4.436-.24a9.023 9.023 0 0 1-7.292 0c-.478-.211-1.418-.546-2.48-.487Z" />
        </svg>
      ),
      title: "Modifikasi Ceper / Tinggi",
      description:
        "Layanan modifikasi suspensi ceper untuk tampilan sporty dan performa maksimal.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12.968 4.97 4.364 0v3.55c0 .449.239.863.627 1.087l4.276 2.47zm5.339 3.083-3.7 2.138 4.86 2.807c.11-.19.17-.407.17-.633V9.552c0-.452-.241-.87-.633-1.096zm1.33 12.397c0-.449-.24-.863-.627-1.087l-4.253-2.456-3.7 2.137L19.637 24zm-13.92-4.49 3.7-2.137c-2.703-1.562-4.884-2.82-4.884-2.82a1.26 1.26 0 0 0-.17.632v2.813c0 .452.242.87.634 1.096zm-.287-1.252a.93.93 0 0 1 .343-.342l12.455-7.194-.01.007.786-.455c.392-.226.633-.643.633-1.096V2.815c0-.452-.241-.87-.633-1.096l-.765-.442a.944.944 0 0 1-.005 1.617l-.006.004-13.231 7.641a1.26 1.26 0 0 0-.633 1.096v2.813c0 .453.24.87.633 1.096l.72.416h.002a.944.944 0 0 1-.29-1.252m12.873-6.652a.945.945 0 0 1-.07 1.575l-.005.004-13.231 7.641a1.26 1.26 0 0 0-.633 1.096v2.813c0 .452.24.87.633 1.096l.765.442a.945.945 0 0 1 .01-1.62l12.456-7.194-.01.006.786-.454c.392-.226.633-.644.633-1.096V9.552c0-.453-.241-.87-.633-1.096l-.697-.403z" />
        </svg>
      ),
      title: "Shock beaker",
      description:
        "menjadikan shock beaker berkualitas tinggi untuk meningkatkan kenyamanan berkendara.",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
      >
        <div data-aos="fade-right" className="container mx-auto mt-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Kami menawarkan berbagai layanan profesional untuk memenuhi semua
              kebutuhan suspensi kendaraan Anda.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-gray-700 transition duration-300 text-center dark:bg-gray-800"
              >
                <div className="mb-4 inline-flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Layanan" className="pb-16 bg-slate-100 dark:bg-dark">
        <div className="max-w-7xl mx-auto pt-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Layanan</span>{" "}
              <span className="text-gray-900 dark:text-white">Unggulan</span>{" "}
              <span className="text-primary">Kami</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed dark:text-white">
              Solusi kami membantu masalah pada kenyamanan Berkendara dan Visual
              Kendaraan anda.
            </p>

            <div className="space-y-5">
              <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="bg-blue-100 text-primary p-2 rounded-md">
                  <svg
                    role="img"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Cachet</title>
                    <path d="M11.746.254C5.265.254 0 5.519 0 12c0 6.481 5.265 11.746 11.746 11.746 6.482 0 11.746-5.265 11.746-11.746 0-1.44-.26-2.82-.734-4.097l-.264-.709-1.118 1.118.1.288c.373 1.064.575 2.207.575 3.4a10.297 10.297 0 01-10.305 10.305A10.297 10.297 0 011.441 12 10.297 10.297 0 0111.746 1.695c1.817 0 3.52.47 5.002 1.293l.32.178 1.054-1.053-.553-.316A11.699 11.699 0 0011.746.254zM22.97.841l-13.92 13.92-3.722-3.721-1.031 1.03 4.752 4.753L24 1.872z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Modifikasi Ceper / Tinggi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    menurunkan ketinggian kendaraan untuk tampilan sporty dan
                    handling lebih baik.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="bg-blue-100 text-primary p-2 rounded-md">
                  <svg
                    role="img"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.746.254C5.265.254 0 5.519 0 12c0 6.481 5.265 11.746 11.746 11.746 6.482 0 11.746-5.265 11.746-11.746 0-1.44-.26-2.82-.734-4.097l-.264-.709-1.118 1.118.1.288c.373 1.064.575 2.207.575 3.4a10.297 10.297 0 01-10.305 10.305A10.297 10.297 0 011.441 12 10.297 10.297 0 0111.746 1.695c1.817 0 3.52.47 5.002 1.293l.32.178 1.054-1.053-.553-.316A11.699 11.699 0 0011.746.254zM22.97.841l-13.92 13.92-3.722-3.721-1.031 1.03 4.752 4.753L24 1.872z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Jasa Dalam Pemasangan Sparepart Suspensi Mobil.
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    Menyediakan jasa pemasangan sparepart suspensi mobil oleh
                    Teknisi Profesional.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="bg-blue-100 text-primary p-2 rounded-md">
                  <svg
                    role="img"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Cachet</title>
                    <path d="M11.746.254C5.265.254 0 5.519 0 12c0 6.481 5.265 11.746 11.746 11.746 6.482 0 11.746-5.265 11.746-11.746 0-1.44-.26-2.82-.734-4.097l-.264-.709-1.118 1.118.1.288c.373 1.064.575 2.207.575 3.4a10.297 10.297 0 01-10.305 10.305A10.297 10.297 0 011.441 12 10.297 10.297 0 0111.746 1.695c1.817 0 3.52.47 5.002 1.293l.32.178 1.054-1.053-.553-.316A11.699 11.699 0 0011.746.254zM22.97.841l-13.92 13.92-3.722-3.721-1.031 1.03 4.752 4.753L24 1.872z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Perbaikan Suspensi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    Menyediakan layanan perbaikan suspensi kendaraan dengan suku
                    cadang berkualitas tinggi.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-primary hover:bg-amber-700 text-white font-medium rounded-lg text-sm shadow-md transition"
              >
                Disukusikan Kebutuhan Anda
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3l7 7-7 7v-4H3v-6h7V3z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <div className="bg-blue-100 text-primary w-10 h-10 flex items-center justify-center rounded-md mb-4">
                <svg
                  role="img"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Databricks</title>
                  <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z" />
                </svg>{" "}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 dark:text-white">
                Melayani Berbagai Jenis perbaikan
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                perbaikan paket service kaki-kaki mobil, perbaikan shock beaker,
                perbaikan worm rackstir eps, dan perbaikan segala keluhan
                suspensi seperti menyelesaikan masalah bunyi2 asing pada
                suspensi.
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <div className="bg-blue-100 text-primary w-10 h-10 flex items-center justify-center rounded-md mb-4">
                <svg
                  role="img"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>XDA Developers</title>
                  <path d="M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z" />
                </svg>{" "}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 dark:text-white">
                Teknologi Terkini
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Kami menggunakan teknologi terbaru untuk memastikan kualitas
                layanan terbaik.
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <div className="bg-blue-100 text-primary w-10 h-10 flex items-center justify-center rounded-md mb-4">
                <svg
                  role="img"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>D-Wave Systems</title>
                  <path d="M10.1062 12.0046c0 1.5815-1.2842 2.8636-2.8685 2.8636-1.5842 0-2.8684-1.282-2.8684-2.8636 0-1.5815 1.2842-2.8635 2.8684-2.8635 1.5843 0 2.8685 1.2821 2.8685 2.8635zM7.2377 0C5.6536 0 4.3693 1.2817 4.3693 2.8628s1.2842 2.8629 2.8684 2.8629c1.5842 0 2.8685-1.2817 2.8685-2.8629C10.1062 1.2817 8.822 0 7.2377 0zm9.5246 18.2781c-1.5838 0-2.8677 1.2764-2.8677 2.8636 0 1.5763 1.2835 2.8583 2.8677 2.8583 1.5845 0 2.8684-1.282 2.8684-2.8583 0-1.5872-1.2843-2.8636-2.8684-2.8636zm-2.8685-6.2735c0-1.5815 1.2842-2.8635 2.8685-2.8635 1.5842 0 2.8684 1.282 2.8684 2.8635 0 1.5815-1.2842 2.8636-2.8684 2.8636-1.5843 0-2.8685-1.282-2.8685-2.8636zm.5 0c0 1.3033 1.0625 2.3636 2.3685 2.3636s2.3684-1.0603 2.3684-2.3636c0-1.3032-1.0624-2.3635-2.3684-2.3635s-2.3685 1.0603-2.3685 2.3635z" />
                </svg>{" "}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 dark:text-white">
                Layanan Cepat & Tepat
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Kami berkomitmen memberikan layanan yang cepat dan tepat waktu
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <div className="bg-blue-100 text-primary w-10 h-10 flex items-center justify-center rounded-md mb-4">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3h2v14H3V3zm6 4h2v10H9V7zm6 6h2v4h-2v-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 dark:text-white">
                Parts Berkualitas
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                menyediakan produk suspensi mobil pada umumnya seperti boshing
                support shock dan sperpart suspensi lainnya, yang paling Utama
                kami menyediakan sperpart lowringkit racing dengan merk maestro
                suspension
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-slate-100 dark:bg-dark">
        <div className="container max-w-7xl mx-auto px-6 py-12">
          <div data-aos="fade-down" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">FAQ</span>{" "}
              <span className="text-gray-900 dark:text-white">Layanan</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed dark:text-white">
              Pertanyaan yang sering diajukan tentang layanan kami.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="text-dark dark:text-white text-lg space-y-6 mx-auto font-bold outline-gray-500 outline-8 p-8 rounded-xl bg-slate-200 dark:bg-slate-800 dark:outline-slate-300 dark:outline-8"
          >
            <h1>
              Q: Berapa lama waktu yang dibutuhkan untuk ganti shockbreaker?
            </h1>
            <h2>
              A: Rata-rata, 1-2 jam per axle (bergantung pada jenis kendaraan
              dan tingkat kesulitan).
            </h2>
            <br />
            <h1>Q: Apakah setelah ganti shockbreaker harus alignment?</h1>
            <h2>
              A: Ya, sangat disarankan untuk melakukan wheel alignment setelah
              mengganti shockbreaker untuk memastikan kinerja optimal.
            </h2>
            <br />
            <h1>Q: Apa tanda-tanda shockbreaker sudah harus diganti?</h1>
            <h2>
              A: Kendaraan terasa oleng dan tidak stabil di jalan bergelombang,
              bunyi "krek-krek" dari bagian roda, ban aus tidak merata, atau
              terjadi kebocoran oli pada shockbreaker.
            </h2>
            <br />
            <h1>Q: Apakah Maestro Suspension menyediakan jasa panggilan?</h1>
            <h2>
              A: Untuk saat ini, kami melayani di bengkel kami agar dapat
              memberikan servis yang maksimal dengan peralatan lengkap. Namun,
              untuk kebutuhan tertentu, silakan hubungi kami untuk diskusi.
            </h2>
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

export default Services;
