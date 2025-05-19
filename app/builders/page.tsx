import BuilderCard from "../components/BuilderCard";

const builders = [
  {
    name: "Justin Waller",
    expertise: "Commercial & Industrial Development",
    location: "Baton Rouge, LA",
    image: "/builders/justin-waller.jpg",
    projectsCompleted: 28,
  },
  {
    name: "Noel Cardosa",
    expertise: "Luxury Residential Development",
    location: "Tampa, FL",
    image: "/builders/noel-cardosa.jpg",
    projectsCompleted: 26,
  },
  {
    name: "Sarah Johnson",
    expertise: "Eco-Friendly & Smart Homes",
    location: "Austin, TX",
    image: "/builders/sarah-johnson.jpg",
    projectsCompleted: 18,
  },
];

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Featured Participants</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Meet the developers participating in our network. These experts bring experience, innovation, and quality to our pilot project round.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {builders.map((builder, index) => (
          <BuilderCard key={index} {...builder} />
        ))}
      </div>
    </div>
  );
}
