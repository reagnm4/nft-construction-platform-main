import { notFound } from 'next/navigation';

type Project = {
  id: string;
  name: string;
  builder: string;
  description: string;
  fundingStatus: string;
  details: string;
  investmentGoal: string;
  raised: string;
  investors: number;
};

const projects: Project[] = [
  {
    id: "green-future-housing",
    name: "Green Future Housing",
    builder: "EcoBuild Group",
    description: "A sustainable housing development using eco-friendly materials and energy-efficient designs.",
    fundingStatus: "Open for Investment",
    details: "This project features smart energy systems, water recycling, and sustainable building materials to create environmentally friendly housing communities.",
    investmentGoal: "$2,500,000",
    raised: "$1,200,000",
    investors: 120,
  },
  {
    id: "skyline-towers",
    name: "Skyline Towers",
    builder: "Urban Development Co.",
    description: "A modern high-rise project in the city center, designed for luxury living and accessibility.",
    fundingStatus: "Fully Funded",
    details: "Skyline Towers is a cutting-edge urban project featuring modern amenities, energy-efficient architecture, and premium city views.",
    investmentGoal: "$10,000,000",
    raised: "$10,000,000",
    investors: 500,
  },
  {
    id: "blockchain-smart-homes",
    name: "Blockchain Smart Homes",
    builder: "NextGen Builders",
    description: "A tech-integrated housing project with blockchain-based property ownership and smart contract automation.",
    fundingStatus: "Upcoming",
    details: "Utilizing blockchain for secure, decentralized homeownership verification and automated contract execution.",
    investmentGoal: "$5,000,000",
    raised: "$500,000",
    investors: 50,
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Project Header */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-800">{project.name}</h1>
        <p className="text-lg text-gray-700 mt-2">
          <strong>Builder:</strong> {project.builder}
        </p>
      </header>

      {/* Project Details Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 text-lg mb-4">{project.details}</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xl font-semibold text-gray-800">Investment Goal</p>
            <p className="text-gray-700">{project.investmentGoal}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">Raised</p>
            <p className="text-gray-700">{project.raised}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">Investors</p>
            <p className="text-gray-700">{project.investors}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">Funding Status</p>
            <p className="text-blue-600">{project.fundingStatus}</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
