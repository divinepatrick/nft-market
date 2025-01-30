"use client";

import NFTCard from './NFTCard';
import { useRef } from 'react';

const popularAuctions = [
  { id: 1, name: 'Faucibus habitasse at et platea massa mauris', price: 2.55, image: '/images/nft10.jpg', timeLeft: '22:59', bidders: 101 },
  { id: 2, name: 'Diam purus sagittis nisl erat mauris', price: 2.55, image: '/images/nft2.jpg', timeLeft: '22:59', bidders: 101 },
  { id: 3, name: 'Nascetur mauris viverra vel id id sem leo', price: 2.55, image: '/images/nft3.jpg', timeLeft: '22:59', bidders: 101 },
  { id: 4, name: 'Velit, fusce id non dui amet amet maecenas', price: 2.55, image: '/images/nft4.jpg', timeLeft: '22:59', bidders: 101 },
  { id: 5, name: 'Tellus duis neque fringilla pulvinar gravida', price: 2.55, image: '/images/nft5.jpg', timeLeft: '22:59', bidders: 101 },
  { id: 6, name: 'Odio lacus neque ultrices purus eget', price: 2.55, image: '/images/nft6.jpg', timeLeft: '22:59', bidders: 101 },
];

export default function PopularAuctionsSection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // to Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // to Adjust scroll distance as needed
    }
  };

  return (
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Most popular live auctions</h2>
        <div className="flex space-x-4 mb-4 justify-center">
          <button className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm hover:bg-gray-600">Architecture</button>
          <button className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm hover:bg-gray-600">Photography</button>
          <button className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm hover:bg-gray-600">Games</button>
          <button className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm hover:bg-gray-600">Music</button>
        </div>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-scroll scroll-smooth space-x-6 pb-4">
            {popularAuctions.map((nft) => (
              <div key={nft.id} className="w-72 flex-none"> {/* Fixed width for each card in carousel */}
                <NFTCard nft={nft} />
              </div>
            ))}
          </div>
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-70 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="text-center mt-16">
          <button className=" text-white rounded-md px-3 py-1 text-sm hover:bg-gray-600 border">See More</button>
        </div>

      </div>
    </section>
  );
}