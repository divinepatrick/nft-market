import Link from 'next/link';
import Image from 'next/image';

export default function BottomNav() {
  return (
    <nav className="bg-[#080821] fixed bottom-0 left-0 right-0 border-t border-gray-700 text-white py-2 md:hidden">
      <div className="container mx-auto flex justify-around">
        <Link href="/" className="flex flex-col items-center hover:text-purple-300">
          <Image src="/images/icon-home.svg" alt="Home" width={24} height={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center hover:text-purple-300">
          <Image src="/images/icon-search.svg" alt="Search" width={24} height={24} />
          <span className="text-xs">Search</span>
        </Link>
        <Link href="/create" className="flex flex-col items-center hover:text-purple-300">
          <Image src="/images/icon-create.svg" alt="Create" width={24} height={24} />
          <span className="text-xs">Create</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center hover:text-purple-300">
          <Image src="/images/icon-notification.svg" alt="Notifications" width={24} height={24} />
          <span className="text-xs">Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center hover:text-purple-300">
          <Image src="/images/icon-profile.svg" alt="Profile" width={24} height={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}