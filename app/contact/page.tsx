export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Join the Network</h1>
      <form className="flex flex-col gap-4 text-gray-600 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-lg"
        />
        <textarea
          placeholder="Tell us about your expertise"
          className="border p-2 rounded-lg"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
