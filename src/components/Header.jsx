import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { logo } from '@/assets';

export default function Header() {
  return (
    <header className="text-custom-gray-300 sticky left-0 top-0 z-50 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit">
      <div className="p-5 flex items-center justify-between w-full max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <Link href={`/`} className="flex gap-2 items-center">
          <div>
            <Image src={logo} alt="GDG logo" />
          </div>
          <div>GDG Aba</div>
        </Link>

        {/* Navigation */}
        <nav
          role="navigation"
          className="hidden md:flex gap-10 md:items-center"
        >
          <div>
            <Link href={`#about`}>About</Link>
          </div>
          {/* <div>
            <Link href={`#events`}>Events</Link>
          </div> */}
          <div>
            <Link href={`#talents`}>Talents</Link>
          </div>
          <div>
            <Link href={`#community-projects`}>Community projects</Link>
          </div>
          <div>
            <Link
              href={`https://gdg.community.dev/gdg-aba/`}
              target="_blank"
              rel={`noopener noreferrer`}
            >
              <Button>Become a member</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
