const stats = [
    { value: '300k', label: 'Total NFTs' },
    { value: '52,5k', label: 'Artists' },
    { value: '17,5k', label: 'Collectors' },
    { value: '35.58', label: 'ETH Volume' },
  ];
  
  export default function StatsSection() {
    return (
      <section className="bg-dark-purple py-12 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }