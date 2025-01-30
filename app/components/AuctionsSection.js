import NFTCard from './NFTCard';

const dummyAuctions = [
    { id: 1, name: 'anim,\na etiam', price: '2.55 ETH', timeLeft: '2:41 min left', bids: 54, image: '/images/nft1.jpg', bidders: [1] },
    { id: 2, name: 'Vulputate felis purus\nviverra  ', price: '3.19 ETH', timeLeft: '2:41 min left', bids: 120, image: '/images/nft2.jpg', bidders: [1,2,3] },
    { id: 3, name: 'Dui accumsan leo\nvestibulum ', price: '1.11 ETH', timeLeft: '22:59 min left', bids: 570, image: '/images/nft3.jpg', bidders: [1,2,3,4,5] },
    { id: 4, name: 'Senectus adipiscing\nnascetur ', price: '1.63 ETH', timeLeft: '37:01 min left', bids: 88, image: '/images/nft4.jpg', bidders: [1,2] },
     { id: 5, name: 'Mattis at diam lorem\nnam sed ', price: null, timeLeft: '12:15 min left', bids: 19, image: '/images/nft5.jpg', bidders: [1,2] },
];

export default function AuctionsSection() {
  return (
    <section className="bg-[#121025] py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Latest live auctions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dummyAuctions.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    </section>
  );
}