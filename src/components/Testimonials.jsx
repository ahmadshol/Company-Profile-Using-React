import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Layanan perbaikan suspensi di Maestro sangat memuaskan. Mobil saya sekarang nyaman kembali seperti baru.",
      author: "Ahmad Rizki",
      position: "Pemilik Toyota Fortuner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Teknisi yang profesional dan sparepart yang original. Hasilnya sangat memuaskan, recommended banget!",
      author: "Linda Sari",
      position: "Pemilik Honda CR-V",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Custom suspensi untuk track day sesuai ekspektasi. Performa mobil saya meningkat signifikan.",
      author: "Rudi Hartono",
      position: "Enthusiast Modifikasi",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimonial Pelanggan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat apa kata pelanggan kami tentang layanan dan kualitas kerja
            Maestro Suspension.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md relative">
            <svg
              className="w-12 h-12 text-blue-100 absolute -top-4 -left-4"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
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
  );
};

export default Testimonials;
