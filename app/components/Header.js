import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-dark-purple text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          NFT Market
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/listing" className="hover:text-gray-300">Listing Page</Link>
          <Link href="/explore" className="hover:text-gray-300">Explore</Link>
          <Link href="/activity" className="hover:text-gray-300">Activity</Link>
          <Link href="/community" className="hover:text-gray-300">Community</Link>
          <Link href="/help" className="hover:text-gray-300">Help</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Connect Wallet
          </button>
          {/* Example Avatar - Replace with actual user avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </header>
  );
}