interface BuilderProps {
    name: string;
    expertise: string;
    location: string;
    image: string;
    projectsCompleted: number;
  }
  
  export default function BuilderCard({ name, expertise, location, image, projectsCompleted }: BuilderProps) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-lg text-gray-700 font-medium">{expertise}</p>
          <p className="text-md text-gray-600">{location}</p>
          <p className="text-md font-semibold text-gray-700 mt-3">
            <span className="text-blue-600">{projectsCompleted}</span> Projects Completed
          </p>
        </div>
      </div>
    );
  }
  