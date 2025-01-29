import NFTCard from './NFTCard';

const dummyAuctions = [
  { id: 1, name: 'Abstract Wave', creator: 'Artist 1', price: 2.5, image: '/images/nft1.jpg' }, // Placeholder images
  { id: 2, name: 'Cyberpunk City', creator: 'Creator 2', price: 1.8, image: '/images/nft2.jpg' },
  { id: 3, name: 'Mystic Landscape', creator: 'Collector 3', price: 3.2, image: '/images/nft3.jpg' },
  { id: 4, name: 'Geometric Art', creator: 'NFT Expert', price: 2.9, image: '/images/nft4.jpg' },
  // ... more NFTs
];

export default function AuctionsSection() {
  return (
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Latest Live Auctions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyAuctions.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
            View All Auctions
          </button>
        </div>
      </div>
    </section>
  );
}