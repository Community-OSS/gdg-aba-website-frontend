import { Dribbble, Facebook, GitHub, Instagram, Twitter } from '@/assets/icons';
import { cn } from '@/lib/utils';

// Community Talent Card
export function TalentCard({
  name,
  role,
  skills,
  twitter,
  facebook,
  instagram,
  dribbble,
  github,
}) {
  return (
    <div className="p-[30px] bg-white rounded-[20px] w-full max-w-[420px] grid gap-[30px]">
      {/* Card image */}
      <div className="bg-gray-300 w-full rounded-lg aspect-square relative"></div>

      {/* Card content */}
      <div className="grid gap-[30px] text-center">
        <div className="grid gap-[10px]">
          <h3 className="text-2xl text-custom-gray-100">{name}</h3>
          <p className="text-custom-gray-300">{role}</p>
          <p className="text-custom-gray-300">{skills}</p>
        </div>

        <div className="text-custom-green flex gap-[10px] w-max mx-auto">
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          )}
          {dribbble && (
            <a href={dribbble} target="_blank" rel="noopener noreferrer">
              <Dribbble />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
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
          <p className="text-custom-gray-300">{role}</p>
        </div>

        <div className="text-custom-blue flex gap-[10px] w-max mx-auto">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
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
      <div
        className={cn(
          'bg-gray-300 w-full aspect-square rounded-[10px] relative',
          {
            'md:aspect-video': type === 'projects',
          }
        )}
      ></div>

      {/* Card content */}
      <div className="grid gap-[30px]">
        <div className="grid gap-[10px]">
          <h3 className="text-2xl text-custom-gray-100">{title}</h3>
          <p className="text-custom-gray-300">{date}</p>
        </div>

        <div>
          <p>{description}</p>
          <div className="text-custom-blue">See More</div>
        </div>
      </div>
    </div>
  );
}
