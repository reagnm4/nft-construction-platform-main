import { notFound } from "next/navigation";

interface Builder {
  id: string;
  name: string;
  expertise: string;
  projects: number;
  bio: string;
  portfolio: string[];
}

export const dynamicParams = true;

const builders: Builder[] = [
  {
    id: "1",
    name: "John Doe",
    expertise: "Residential Construction",
    projects: 12,
    bio: "John specializes in building eco-friendly residential homes with modern designs.",
    portfolio: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    expertise: "Commercial Development",
    projects: 8,
    bio: "Jane focuses on creating commercial spaces that balance functionality and aesthetics.",
    portfolio: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
  },
];

export default async function BuilderProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const builder = builders.find((b) => b.id === id);

  if (!builder) {
    notFound(); // Show a 404 page if the builder is not found
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{builder.name}</h1>
      <p className="text-gray-600 mb-4">
        <strong>Expertise:</strong> {builder.expertise}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Projects Completed:</strong> {builder.projects}
      </p>
      <p className="text-gray-600 mb-8">{builder.bio}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        {builder.portfolio.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Portfolio item ${index + 1}`}
            className="rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}
