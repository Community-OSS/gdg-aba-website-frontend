import Layout from '@/components/Layout';
import { DefaultCard, OrganizerCard, TalentCard } from '@/components/Cards';
import { organizers, talents } from '@/lib/data';

export default function Test() {
  return (
    <Layout title={`Test`}>
      <section>
        <h1>Testing cards</h1>

        <div className="grid md:flex flex-wrap gap-10">
          <DefaultCard
            type={`projects`}
            title={`Community Project One`}
            date={`October 2021`}
          />

          <DefaultCard
            type={`events`}
            title={`Speaker/Session Talk`}
            date={`October 2021`}
          />

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
      </section>
    </Layout>
  );
}
