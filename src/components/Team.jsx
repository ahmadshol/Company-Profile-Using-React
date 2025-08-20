const Team = () => {
  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: "Suspension Specialist",
    },
    {
      name: "Sari Wijaya",
      position: "Head Technician",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: "Performance Tuning",
    },
    {
      name: "Agus Pratama",
      position: "Senior Mechanic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: "Suspension Design",
    },
    {
      name: "Dewi Lestari",
      position: "Customer Service",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: "Client Relations",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tim Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim profesional kami siap memberikan pelayanan terbaik untuk solusi
            suspensi kendaraan Anda.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
