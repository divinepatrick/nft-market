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
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Check out the hottest Sale offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummySales.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
            Show more offers
          </button>
        </div>
      </div>
    </section>
  );
}