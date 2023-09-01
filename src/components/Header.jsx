import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { logo } from '@/assets';

export default function Header() {
  return (
    <header className="p-5 flex items-center justify-between w-full max-w-5xl mx-auto text-custom-gray-300">
      {/* Logo/Brand */}
      <div className="flex gap-2 items-center">
        <div>
          <Image src={logo} alt="GDG logo" />
        </div>
        <div className="">GDG Aba</div>
      </div>

      {/* Navigation */}
      <nav role="navigation" className="md:flex gap-10 md:items-center">
        <div>
          <Link href={`/about`}>About</Link>
        </div>
        <div>
          <Link href={`/events`}>Events</Link>
        </div>
        <div>
          <Link href={`/talents`}>Talents</Link>
        </div>
        <div>
          <Link href={`/community-projects`}>Community projects</Link>
        </div>
        <div>
          <Link href={`/become-a-member`}>
            <Button>Become a member</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
