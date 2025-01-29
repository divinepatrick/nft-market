export default function HeroSection() {
    return (
      <section className="bg-dark-purple text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A new NFT <span className="text-purple-500">Experience</span></h1>
          <p className="text-lg mb-8">Discover, collect, and sell extraordinary NFTs</p>
          <div className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search NFTs or creators"
              className="w-full p-3 rounded-lg text-black"
            />
          </div>
        </div>
      </section>
    );
  }