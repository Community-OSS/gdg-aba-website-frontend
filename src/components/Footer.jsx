import Link from 'next/link';
import { Facebook, GDGLogo, Instagram, Twitter } from '@/assets/icons';

export default function Footer() {
  return (
    <footer className="text-custom-blue bg-gradient-to-t from-white backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit">
      <div className="p-5 grid gap-10 md:flex items-center justify-between w-max md:w-full max-w-5xl mx-auto">
        <div className="flex gap-3 items-center w-full">
          {/* Logo/Brand */}
          <Link href={`/`} className="flex gap-2 items-center">
            <div>
              <GDGLogo />
            </div>
            <div>GDG Aba</div>
          </Link>

          {/* Copyright */}
          <div>Copyright &copy; {new Date().getFullYear()}</div>
        </div>

        <div className="flex gap-[10px] justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
