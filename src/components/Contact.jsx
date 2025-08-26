import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    // Handle form submission here
    console.log(formData);
    alert(
      "Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto my-20 px-6 fade-in">
        <div className="text-center mb-16">
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
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
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
                  Alamat
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-white">
                  info@maestrosuspension.com
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
                Jam Operasional
              </h3>
              <p className="text-gray-600 mb-2 dark:text-white">
                <span className="font-semibold">Senin - Jumat:</span> 08:00 -
                17:00
              </p>
              <p className="text-gray-600 mb-2 dark:text-white">
                <span className="font-semibold">Sabtu:</span> 09:00 - 15:00
              </p>
              <p className="text-gray-600 dark:text-white">
                <span className="font-semibold">Minggu:</span> Tutup
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8">
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
                  htmlFor="phone"
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
