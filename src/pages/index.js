import { heroAnimation } from '@/assets';
import { OrganizerCard, TalentCard } from '@/components/Cards';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { organizers, talents } from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title={`Home`}>
      {/* Hero/Banner */}
      <Section boxedWidth>
        <div className="flex gap-2 justify-center text-3xl md:text-[64px] pb-10 md:pb-20">
          <span className="text-custom-blue">Connect.</span>
          <span className="text-custom-red">Learn.</span>
          <span className="text-custom-green">Grow.</span>
        </div>
        <div>
          <Image src={heroAnimation} alt="hero animation" />
        </div>
      </Section>

      {/* About GDG Aba */}
      <Section title={`About GDG Aba`}></Section>

      {/* Community Talent */}
      <Section title={`Community Talent`} boxedWidth>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {talents.map((talent) => (
            <TalentCard
              key={talent.id}
              name={talent.name}
              role={talent.role}
              skills={talent.skills}
              facebook={talent.facebook}
              twitter={talent.twitter}
              instagram={talent.instagram}
              dribbble={talent.dribbble}
              github={talent.github}
            />
          ))}
        </div>
      </Section>

      {/* Organizers */}
      <Section title={`Organizers`} boxedWidth>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {organizers.map((organizer) => (
            <OrganizerCard
              key={organizer.id}
              name={organizer.name}
              role={organizer.role}
              twitter={organizer.twitter}
              facebook={organizer.facebook}
              instagram={organizer.instagram}
            />
          ))}
        </div>
      </Section>

      {/* Community Projects */}
      <Section title={`Community Projects`}></Section>

      {/* Newsletter */}
      <Section></Section>
    </Layout>
  );
}
