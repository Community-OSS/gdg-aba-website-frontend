import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header>
      {/* Logo/Brand */}
      <div>
        <Image src={`/GDG.png`} alt="GDG logo" width={44} height={21} />
      </div>

      {/* Navigation */}
      <nav></nav>
    </header>
  );
}
