import Image from 'next/image';

const teamMembers = [
  { id: 1, username: 'brook_slim', avatar: '/images/avatar1.jpg', items: 206, collection: 12, eth: '4.78 ETH' },
  { id: 2, username: 'marvinmckin', avatar: '/images/avatar2.jpg', items: 479, collection: 24, eth: '7.53 ETH' },
  { id: 3, username: 'esther_howard', avatar: '/images/avatar3.jpg', items: 387, collection: 10, eth: '5.11 ETH' },
  { id: 4, username: 'brook_slim2', avatar: '/images/avatar4.jpg', items: 99, collection: 11, eth: '6.22 ETH' }, // Example of 4th member for visual stacking
];

export default function NewsletterSection() {
  return (
    <section className="bg-[#080821] py-12 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="bg-[#131221] rounded-3xl flex md:flex-row flex-col items-stretch relative">
          {/* Tab protrusion on the right */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-24 w-6 bg-[#131221] rounded-l-full shadow-lg"></div>
          <div className="md:w-1/2 p-12 text-white">
            <span className="uppercase text-gray-400 block mb-4">Overline</span>
            <h2 className="text-3xl font-bold mb-6 leading-tight">Cursus vitae sollicitudin donec nascetur. <br/> <span className="text-purple-500">Join now</span></h2>
            <p className="text-gray-300 mb-8">Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
            <div className="flex space-x-4">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg">
                Get started
              </button>
              <button className="border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-start space-y-4 relative">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={member.id} className="flex items-center justify-between bg-[#1A182A] rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500">
                    <Image src={member.avatar} alt={member.username} width={44} height={44} className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{`@${member.username}`}</h3>
                    <div className="flex space-x-4 text-gray-400 text-sm">
                      <span><Image src="/images/items-icon.svg" alt="Items" width={12} height={12} className="inline mr-1" /> Items {member.items}</span>
                      <span><Image src="/images/collection-icon.svg" alt="Collection" width={12} height={12} className="inline mr-1" /> Collection {member.collection}</span>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-purple-400">{member.eth}</div>
              </div>
            ))}
             {/* Faded out member cards at the bottom */}
             <div className="absolute bottom-0 right-0 md:block hidden">
                <div className="flex flex-col space-y-4 opacity-30 translate-x-10 translate-y-10">
                    {teamMembers.slice(3, 4).map((member, index) => (
                        <div key={member.id} className="flex items-center justify-between bg-[#1A182A] rounded-xl p-4">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500">
                                    <Image src={member.avatar} alt={member.username} width={44} height={44} className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{`@${member.username}`}</h3>
                                    <div className="flex space-x-4 text-gray-400 text-sm">
                                        <span><Image src="/images/items-icon.svg" alt="Items" width={12} height={12} className="inline mr-1" /> Items {member.items}</span>
                                        <span><Image src="/images/collection-icon.svg" alt="Collection" width={12} height={12} className="inline mr-1" /> Collection {member.collection}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold text-purple-400">{member.eth}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}