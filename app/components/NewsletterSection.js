import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'Member 1', avatar: '/images/avatar1.jpg' }, // Placeholder avatars
  { id: 2, name: 'Member 2', avatar: '/images/avatar2.jpg' },
  { id: 3, name: 'Member 3', avatar: '/images/avatar3.jpg' },
  { id: 4, name: 'Member 4', avatar: '/images/avatar4.jpg' },
  // ... more members
];

export default function NewsletterSection() {
  return (
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cursus vitae sollicitudin donec nascetur. Join now</h2>
          <p className="text-gray-300">Stay updated with our latest news and offers.</p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg text-black"
            />
            <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg w-full">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-around md:justify-end space-x-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
              <Image src={member.avatar} alt={member.name} width={48} height={48} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}