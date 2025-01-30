import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#121025] text-white min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <div className="container mx-auto py-4 px-6 relative z-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            NFT Market
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/listing" className="hover:text-gray-300">Auctions</Link>
            <Link href="/explore" className="hover:text-gray-300">Roadmap</Link>
            <Link href="/activity" className="hover:text-gray-300">Discover</Link>
            <Link href="/community" className="hover:text-gray-300">Community</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-white">
              Contact
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              My account
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto text-center relative z-10 pt-32 pb-40 px-6">
        <h2 className="text-sm text-gray-400 uppercase mb-4">
          Non Fungible Tokens
        </h2>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1] mb-8 relative inline-block">
            A new NFT
            <span className="text-[#31F2F7]">C</span>
            <br />
            Experience
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Concentric circles */}
              <div
                className="absolute rounded-full border-2 border-[#31F2F7] opacity-20"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "40rem",
                  height: "40rem",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute rounded-full border-2 border-[#31F2F7] opacity-20"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "30rem",
                  height: "30rem",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute rounded-full border-2 border-[#31F2F7] opacity-20"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "20rem",
                  height: "20rem",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </h1>
        </div>
        <p className="text-base mb-10">Discover, collect and sell</p>
        <div className="max-w-lg mx-auto flex space-x-2">
          <input
            type="text"
            placeholder="Items, collections and creators"
            className="w-full p-3 rounded-md text-black border-none focus:outline-none"
          />
          <select className="border p-3 rounded-md bg-white text-black focus:outline-none">
            <option>Category</option>
          </select>
          <button className="bg-white rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Circular NFT images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Image */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative rounded-full w-20 h-20 overflow-hidden border-2 border-white">
            <img
              src="https://i.imgur.com/q6z2t86.png"
              alt="nft"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-1 text-xs">2.55 ETH</div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative rounded-full w-20 h-20 overflow-hidden border-2 border-white">
            <img
              src="https://i.imgur.com/dD1X47M.png"
              alt="nft"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-1 text-xs">2.55 ETH</div>
          </div>
        </div>

        {/* Rotated Images */}
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-200px) rotate(-${i * 90}deg)`
            }}
          >
            <div className="relative rounded-full w-20 h-20 overflow-hidden border-2 border-white">
              <img
                src={`https://i.imgur.com/${['t4j8p4j', 'f59K0s9', 'p6iT50X', 'g5zN4iV'][i]}.png`}
                alt="nft"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 left-1 text-xs">2.55 ETH</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#080623_40%,transparent_100%)]"></div>
    </header>
  );
}


