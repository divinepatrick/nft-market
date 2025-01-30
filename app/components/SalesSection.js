import NFTCard from './NFTCard';

const dummySales = [
  { id: 5, name: 'Neon Dystopia', creator: 'Artist 4', price: 1.5, image: '/images/nft5.jpg' },
  { id: 6, name: 'Pixel Dream', creator: 'Creator 5', price: 2.0, image: '/images/nft6.jpg' },
  { id: 7, name: 'Glitch Art', creator: 'Collector 6', price: 1.2, image: '/images/nft7.jpg' },
  { id: 8, name: 'Vaporwave Sunset', creator: 'NFT Expert 7', price: 1.9, image: '/images/nft8.jpg' },
  // ... more NFTs
];

export default function SalesSection() {
  return (
    <div className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto flex flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-6">Check out the hottest Sale offers</h2>
          <div className="flex flex-row gap-4">
            <div className="w-1/2 flex flex-col bg-neutral-800 rounded-2xl px-4">
              <div className="p-2">
                <img src="/images/nft5.jpg" className="rounded-xl" alt="" />
              </div>

              <p className="text-white">Fames habitasse risus ultricies tortor sit</p>
              <div className="flex flex-row justify-between items-center">
                <div className="text-white text-sm">
                  <i className="ri-time-line"></i> 22:59
                </div>
                <div className="text-white">
                  <p>2.55 ETH</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mb-4">

                <p className="text-gray-400 text-sm">101 people are bidding</p>
                <i className="ri-heart-line text-white"></i>

              </div>
            </div>
            <div className="w-1/2 flex flex-col bg-neutral-800 rounded-2xl px-4">
              <div className="p-2">
                <img src="/images/nft6.jpg" className="rounded-xl" alt="" />
              </div>

              <p className="text-white">Fames habitasse risus ultricies tortor sit</p>
              <div className="flex flex-row justify-between items-center">
                <div className="text-white text-sm">
                  <i className="ri-time-line"></i> 22:59
                </div>
                <div className="text-white">
                  <p>2.55 ETH</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mb-4">

                <p className="text-gray-400 text-sm">101 people are bidding</p>
                <i className="ri-heart-line text-white"></i>

              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-neutral-900 text-white font-bold py-2 px-6 rounded-full">
              Show me more
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-neutral-800 rounded-3xl w-[300px] h-[100%] p-4 flex flex-col items-center justify-center">
            <img src="/images/hammernft.png" alt="" className="object-contain h-full"/>
            <p className="text-white mt-4 font-bold">Get started creating & selling your NFTs</p>
            <p className="text-gray-400 text-center">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full mt-4">
              Get started
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold text-white mb-6">Top NFT at a lower price</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center bg-neutral-800 rounded-2xl p-2">

              <div className="w-24 p-2 rounded-xl">
                <img src="/images/nft7.jpg" className="rounded-xl" alt="" />
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <p className="text-white text-sm">Vulputate velit viverra volutpat volutpat tristique</p>
                <div className="flex flex-row justify-between items-center text-sm">
                  <div className="text-gray-400">
                    <i className="ri-time-line"></i> 22:59
                  </div>
                  <p className="text-purple-500">1.25 ETH</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-gray-400">101 people are bidding</p>
                  <i className="ri-heart-line text-white"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center bg-neutral-800 rounded-2xl p-2">

              <div className="w-24 p-2 rounded-xl">
                <img src="/images/nft8.jpg" className="rounded-xl" alt="" />
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <p className="text-white text-sm">Egestas blandit sit egestas non sed. Purus semper</p>
                <div className="flex flex-row justify-between items-center text-sm">
                  <div className="text-gray-400">
                    <i className="ri-time-line"></i> 22:59
                  </div>
                  <p className="text-purple-500">1.25 ETH</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-gray-400">101 people are bidding</p>
                  <i className="ri-heart-line text-white"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center bg-neutral-800 rounded-2xl p-2">

              <div className="w-24 p-2 rounded-xl">
                <img src="/images/nft5.jpg" className="rounded-xl" alt="" />
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <p className="text-white text-sm">Id ut consequat netus nec vel amet ut porta in augue</p>
                <div className="flex flex-row justify-between items-center text-sm">
                  <div className="text-gray-400">
                    <i className="ri-time-line"></i> 22:59
                  </div>
                  <p className="text-purple-500">1.25 ETH</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-gray-400">101 people are bidding</p>
                  <i className="ri-heart-line text-white"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center bg-neutral-800 rounded-2xl p-2">

              <div className="w-24 p-2 rounded-xl">
                <img src="/images/nft6.jpg" className="rounded-xl" alt="" />
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <p className="text-white text-sm">Sed et nibh felis integer tellus turpin</p>
                <div className="flex flex-row justify-between items-center text-sm">
                  <div className="text-gray-400">
                    <i className="ri-time-line"></i> 22:59
                  </div>
                  <p className="text-purple-500">1.25 ETH</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-gray-400">101 people are bidding</p>
                  <i className="ri-heart-line text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-neutral-900 text-white font-bold py-2 px-6 rounded-full">
              Show me more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}