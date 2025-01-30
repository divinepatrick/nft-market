import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';

const NFTCard = ({ nft }) => {
    return (
      <div className="bg-dark-gray rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
        <Image
          src={nft.image}
          alt={nft.name}
          width={500}
          height={400}
          className="w-full h-48 object-cover object-center" // Adjust height as needed
        />
          {nft.bidders?.length > 0 && (
           <div className="absolute top-2 right-2 flex items-center space-x-1">
           
             <div className="flex -space-x-1">
               {nft.bidders.map((bidder, index) => (
                 <div key={index} className="rounded-full border-2 border-white relative w-5 h-5 overflow-hidden">
                 <Image 
                   src="/images/avatar.png"
                   alt="Avatar"
                   width={20}
                   height={20}
                   className="object-cover"
                 />
                 </div>
               ))}
                
             </div>
              <div className="text-white text-sm ml-2">{nft.bidders.length} {nft.bidders.length === 1 ? 'person is' : 'people are'} bidding</div>

           </div>
          )}
        </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-white text-lg font-semibold whitespace-pre-line">{nft.name}</h3>
             {nft.price && <span className="text-purple-400 font-medium">{nft.price}</span>}
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-400 text-sm">
              {nft.timeLeft}
          </span>
          <div className="flex items-center">
            <HeartIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-gray-400 text-sm">{nft.bids}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;