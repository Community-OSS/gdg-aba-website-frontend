import Link from 'next/link';
import { cn } from '@/lib/utils';

// Community Talent Card
export function TalentCard() {
  return <div>Talent Card</div>;
}

// Organizer Card
export function OrganizerCard({ facebook, instagram, name, role, twitter }) {
  return (
    <div className="p-[30px] bg-white rounded-[20px] w-full max-w-[420px] grid gap-[30px]">
      {/* Card image */}
      <div className="bg-gray-300 w-full aspect-square rounded-full relative"></div>

      {/* Card content */}
      <div className="grid gap-[30px] text-center">
        <div className="grid gap-[10px]">
          <h3 className="text-2xl text-custom-gray-100">{name}</h3>
          <div className="text-custom-gray-300">{role}</div>
        </div>

        <div className="text-custom-blue flex gap-[10px] w-max mx-auto">
          <Link href={twitter}>TW</Link>
          <Link href={facebook}>FB</Link>
          <Link href={instagram}>IG</Link>
        </div>
      </div>
    </div>
  );
}

// Default Card (for Projects and Events)
export function DefaultCard({ date, description, title, type }) {
  return (
    <div
      className={cn('p-[30px] bg-white rounded-[20px] w-full grid gap-[30px]', {
        'max-w-[660px]': type === 'projects',
        'max-w-[420px]': type === 'events',
      })}
    >
      {/* Card image */}
      <div className="bg-gray-300 w-full h-[360px] rounded-[10px] relative"></div>

      {/* Card content */}
      <div className="grid gap-[30px]">
        <div className="grid gap-[10px]">
          <h3 className="text-2xl text-custom-gray-100">{title}</h3>
          <div className="text-custom-gray-300">{date}</div>
        </div>

        <div>
          <p>{description}</p>
          <div className="text-custom-blue">See More</div>
        </div>
      </div>
    </div>
  );
}
