"use client";

import NFTCard from './NFTCard';
import { useRef } from 'react';

const popularAuctions = [
  { id: 9, name: 'Abstract Flow', creator: 'Artist 8', price: 4.2, image: '/images/nft9.jpg' },
  { id: 10, name: 'Digital Sculpture', creator: 'Creator 9', price: 3.8, image: '/images/nft10.jpg' },
  { id: 11, name: 'Surreal World', creator: 'Collector 10', price: 5.1, image: '/images/nft11.jpg' },
  { id: 12, name: 'Cybernetic Being', creator: 'NFT Expert 11', price: 4.5, image: '/images/nft12.jpg' },
  { id: 13, name: 'Infinite Loop', creator: 'Artist 12', price: 3.9, image: '/images/nft13.jpg' },
  // ... more NFTs
];

export default function PopularAuctionsSection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  return (
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Most popular live auctions</h2>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-scroll scroll-smooth space-x-6 pb-4">
            {popularAuctions.map((nft) => (
              <div key={nft.id} className="w-80 flex-none"> {/* Fixed width for each card in carousel */}
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
      </div>
    </section>
  );
}