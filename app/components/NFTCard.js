import Image from 'next/image';

export default function NFTCard({ nft }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <Image src={nft.image} alt={nft.name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
        <p className="text-gray-400 text-sm">{nft.creator}</p>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-300">Current Price</p>
            <p className="text-white font-medium">{nft.price} ETH</p>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-sm">
            Bid
          </button>
        </div>
      </div>
    </div>
  );
}