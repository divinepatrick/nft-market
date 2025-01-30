import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#080821] py-12 px-6 border-t border-[#292831]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {/* Left Column */}
        <div className="flex flex-col justify-start">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center mb-4">
              <Image src="/images/market-logo.png" alt="NFT Market Logo" width={30} height={30} className="mr-2" />
              NFT Market
            </Link>
            <div className="flex flex-col h-full justify-end">
              <div className="flex justify-start space-x-6">
                <Link href="/support" className="hover:opacity-70 block font-normal">Support</Link> {/* Changed font-normal */}
                <Link href="/terms" className="hover:opacity-70 block font-normal">Term of service</Link> {/* Changed font-normal */}
                <Link href="/license" className="hover:opacity-70 block font-normal">License</Link> {/* Changed font-normal */}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <nav className="flex flex-col space-y-3">
          <Link href="/auctions" className="hover:opacity-70 block font-normal">Auctions</Link> {/* Changed font-normal */}
          <Link href="/roadmap" className="hover:opacity-70 block font-normal">Roadmap</Link> {/* Changed font-normal */}
          <Link href="/discover" className="hover:opacity-70 block font-normal">Discover</Link> {/* Changed font-normal */}
          <Link href="/community" className="hover:opacity-70 block font-normal">Community</Link> {/* Changed font-normal */}
          <button className="bg-[#3734A9] hover:bg-[#4A47C7] text-white font-normal py-3 px-6 rounded-lg w-full text-left transition-colors"> {/* Changed font-normal */}
            My account
          </button>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="hover:opacity-70">
              <Image src="/images/social-facebook.svg" alt="Facebook" width={50} height={35} className="opacity-100 hover:opacity-80 transition-opacity" /> {/* Changed hover:opacity-100 to hover:opacity-80 */}
            </Link>
            <Link href="#" className="hover:opacity-70">
              <Image src="/images/social-linkedin.svg" alt="LinkedIn" width={50} height={35} className="opacity-100 hover:opacity-80 transition-opacity" /> {/* Changed hover:opacity-100 to hover:opacity-80 */}
            </Link>
            <Link href="#" className="hover:opacity-70">
              <Image src="/images/social-github.svg" alt="Discord" width={50} height={35} className="opacity-100 hover:opacity-80 transition-opacity" /> {/* Changed hover:opacity-100 to hover:opacity-80 */}
            </Link>
            <Link href="#" className="hover:opacity-70">
              <Image src="/images/social-twitter.svg" alt="Twitter" width={50} height={35} className="opacity-100 hover:opacity-80 transition-opacity" /> {/* Changed hover:opacity-100 to hover:opacity-80 */}
            </Link>
            <Link href="#" className="hover:opacity-70">
              <Image src="/images/social-instagram.svg" alt="Instagram" width={50} height={35} className="opacity-100 hover:opacity-80 transition-opacity" /> {/* Changed hover:opacity-100 to hover:opacity-80 */}
            </Link>
          </div>
        </nav>

        {/* Right Column */}
        <div className="flex flex-col justify-start">
          <div>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p> {/* Changed font-normal */}</div>
          <div className="flex items-center mt-auto rounded-lg bg-[#131221] overflow-hidden border border-[#292831]">
            <input
              type="email"
              placeholder="Newsletter"
              className="bg-transparent py-3 px-4 text-white focus:outline-none w-full placeholder:text-[#57565E] text-sm" // Changed placeholder:text-[#57565E] and added text-sm
            />
            <button className="bg-white text-black font-medium py-3 px-6 rounded-r-lg hover:bg-gray-200 transition-colors text-sm"> {/* Added text-sm */}
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="container mx-auto mt-12 pt-6 border-t border-[#292831] text-white text-sm">

        <p className="text-gray-400 mt-4 text-xs">© {new Date().getFullYear()} NFT Market. All rights reserved.</p> {/* Changed text-xs */}
      </div>
    </footer>
  );
}