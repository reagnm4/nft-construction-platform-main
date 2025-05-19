export default function Projects() {
    const projects = [
      {
        id: 1,
        name: "Green Future Housing",
        builder: "EcoBuild Group",
        description: "A sustainable housing development using eco-friendly materials and energy-efficient designs.",
        fundingStatus: "Open for Investment",
        link: "/projects/green-future-housing",
      },
      {
        id: 2,
        name: "Skyline Towers",
        builder: "Urban Development Co.",
        description: "A modern high-rise project in the city center, designed for luxury living and accessibility.",
        fundingStatus: "Fully Funded",
        link: "/projects/skyline-towers",
      },
      {
        id: 3,
        name: "Blockchain Smart Homes",
        builder: "NextGen Builders",
        description: "A tech-integrated housing project with blockchain-based property ownership and smart contract automation.",
        fundingStatus: "Upcoming",
        link: "/projects/blockchain-smart-homes",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        {/* Page Header */}
        <header className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Pilot Funding Projects</h1>
          <p className="text-lg text-gray-700 mt-4">
            View and explore project proposals submitted by our network.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://real-estate-funding-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition">
                Submit Proposal
              </button>
            </a>
          </div>
        </header>
  
        {/* Projects List */}
        <section className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
                <p className="text-gray-600"><strong>Builder:</strong> {project.builder}</p>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-gray-600 mt-3"><strong>Status:</strong> <span className="text-blue-600">{project.fundingStatus}</span></p>
                <a href={project.link} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  