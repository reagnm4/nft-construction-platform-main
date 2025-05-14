export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Collaborative Capital Raises For RE Developers</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Building a network of real estate developers, contractors, and investors to organize group funding rounds for PE funds and UHNWI.
        </p>
        <div className="mt-6 space-x-4">
          <a href="/builders" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
            Join the Network
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Why Join The Pilot Funding Project?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Get Funded</h3>
            <p className="text-gray-600">Access capital for real estate projects through collaborative funding rounds.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Expert Network</h3>
            <p className="text-gray-600">Gain access to a vetted community of real estate professionals, builders, and investors with industry expertise.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Early Access</h3>
            <p className="text-gray-600">Exclusive benefits for proof of concept participants for future scalability.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white text-center py-20">
        <h2 className="text-3xl font-bold">Get Involved Today</h2>
        <p className="text-lg mt-2 mb-6">Apply to join the network & participate in our first collaborative funding round.</p>
        <a href="/signup" className="bg-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Apply Now
        </a>
      </section>
    </div>
  );
}
