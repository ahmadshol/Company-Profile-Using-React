import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

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
        "template_qbdwdpw", 
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        "PAVLgwtUyB49mdZzX" 
      )
      .then(
        (result) => {
          alert(
            "Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera."
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Maaf, pesan gagal dikirim. Silakan coba lagi.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto my-20 px-6 fade-in">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Tertarik dengan layanan kami? Hubungi kami dan kami akan dengan
            senang hati membantu Anda.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div data-aos="fade-right" className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
              Informasi Kontak
            </h3>

            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Alamat Cabang Sragen
                </h4>
                <p className="text-gray-600 dark:text-white">
                  Depan Bank Bri, Jl. Sragen - Solo, Kebayanan 1, Duyungan, Kec.
                  Sidoharjo, Kabupaten Sragen, Jawa Tengah 57281
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Alamat Cabang Tuntang
                </h4>
                <p className="text-gray-600 dark:text-white">
                  Jl. Fatmawati No.83, Gading, Tuntang, Kec. Tuntang, Kabupaten Semarang, Jawa Tengah 50773
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Telepon
                </h4>
                <p className="text-gray-600 dark:text-white">
                  +62 895-2505-7711
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"><title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Tiktok
                </h4>
                <p className="text-gray-600 dark:text-white">
                  @maestrosuspension17
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"><title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Instagram
                </h4>
                <p className="text-gray-600 dark:text-white">
                  @maestro_suspension
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
                Jam Operasional
              </h3>
              <p className="text-gray-600 mb-2 dark:text-white">
                <span className="font-semibold">Setiap Hari:</span> 08:00 -
                17:00
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
                Cabang Sragen
              </h3>
              <iframe
              className="w-full h-150 mt-10 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.4741879488949!2d110.9691946683927!3d-7.45011533920564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1bda80dc6d81%3A0x882314f229b5d23!2sMAESTRO%20SUSPENSION%20SRAGEN%20(%20Spesialis%20Suspensi%20Kaki-Kaki%20%26%20Shock%20Breaker%20)!5e0!3m2!1sid!2sid!4v1756267717978!5m2!1sid!2sid"
              width="300"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
                Cabang Tuntang  
              </h3>
              <iframe
              className="w-full h-150 mt-10 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.35798087008232!2d110.45572762267862!3d-7.271796024061018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70834a0e9052db%3A0x40df870a4a15d117!2sMAESTRO%20SUSPENSION%20TUNTANG%20(%20Spesialis%20Suspensi%20Kaki-Kaki%20%26%20Shock%20Beaker%20)!5e0!3m2!1sid!2sid!4v1758449650236!5m2!1sid!2sid"
              width="300"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            
            
          </div>

          <div data-aos="fade-left" className="md:w-1/2 md:pl-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
                Kirim Pesan
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-secondary transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
