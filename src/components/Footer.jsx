import Link from 'next/link';
import { GDGLogo } from '@/assets/icons';

export default function Footer() {
  return (
    <footer className="bg-white text-custom-blue">
      <div className="p-5 flex items-center justify-between w-full max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <Link href={`/`} className="flex gap-2 items-center">
          <div>
            <GDGLogo />
          </div>
          <div>GDG Aba</div>
          <div className="pl-5">
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </Link>

        <div className="flex gap-[10px]">
          <a href="/" target="_blank" rel="noopener noreferrer">
            TW
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            FB
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}
