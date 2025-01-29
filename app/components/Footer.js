import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-purple py-8 px-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-white">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold block mb-2">NFT Market</Link>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} NFT Market. All rights reserved.</p>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-300"><Image src="/images/social-facebook.svg" alt="Facebook" width={24} height={24} /></Link>
          <Link href="#" className="hover:text-gray-300"><Image src="/images/social-twitter.svg" alt="Twitter" width={24} height={24} /></Link>
          <Link href="#" className="hover:text-gray-300"><Image src="/images/social-instagram.svg" alt="Instagram" width={24} height={24} /></Link>
        </div>
      </div>
    </footer>
  );
}