export default function Overview() {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        {/* Page Header */}
        <header className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Building the Future of Construction Funding</h1>
          <p className="text-lg text-gray-700 mt-4">
            The Pilot Funding Project is spearheading a new method for RE developers to acquire access to capital, leveraging network collaboration to access private equity funding.
          </p>
        </header>
  
        {/* Vision Section */}
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            The concept is to facilitate roll up funding rounds for small/medium size renovation and development projects. This idea is inspired by a M&A strategy called a roll up. This is where a fund buys small businesses, consolidates them, and sells them off to large PE players.
            PE has to deploy vast amounts of capital, a big reason why well known developers are able to raise funds for a new project with 1-3 LPs. However, a Billion dollar fund is not going to be looking at 6 & 7 figure investments. That would take far too long, even if the smaller investments offered better returns. 
            On the flip side, those less known and established in the development space spend a significant amount of time finding capital partners to raise funds for their deals, especially in the early stages of building their track record. Even when offering incredible returns, capital access is a major bottleneck on this end of the spectrum.
            Our vision is to build a network of investors and developers that can work together to access large scale capital funding through collaborative raises. The platform available for this network is used to submit proposals for funding, with proposal applications being gated and accessible exclusively for network participants. 
            Vetted projects will be rolled up into 8-9 figure chunks for funding via PM & PE partners. 
            The platform charges a 1% percent fee to developers collected at funding.

          </p>
        </section>
  
        {/* How It Works Section */}
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-3">
            <li>👥 Developers are invited to join the network and issued a pilot membership card.</li>
            <li>📄 Members submit project proposals to be consolidated for pilot funding round.</li>
            <li>🔗 Projects are vetted internally & externally upon reaching pilot funding target.</li>
            <li>🏗️ Project portfolio is funded by private partners and capital distributed to developers.</li>
          </ul>
        </section>
  
        {/* Roadmap Section */}
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Roadmap</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="text-lg text-gray-700 space-y-4">
              <li><strong>✅ Phase 1: Platform Development</strong> – Launch core platform for member project proposals.</li>
              <li><strong>🚀 Phase 2: Network Formation</strong> – Build foundational community of exerienced and respected developers.</li>
              <li><strong>🔗 Phase 3: Raise Collaboration</strong> – Upload projects, vet proposals, and expand awareness for quality scaling.</li>
              <li><strong>📈 Phase 4: Funding Execution</strong> – Project funding fulfilled via private partners & distributed to project participants.</li>
            </ul>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800">Join the Movement</h2>
          <p className="text-lg text-gray-700 mt-2">
            Whether you&apos;re building your track record or ready to develop at the next level, the network is a gateway to efficient, collaborative funding.
          </p>
          <div className="mt-6 space-x-4">
            <a href="/builders" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700">
              View Network Participants
            </a>
            <a href="/investors" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900">
              Submit Project Proposal
            </a>
          </div>
        </section>
      </div>
    );
  }
  
