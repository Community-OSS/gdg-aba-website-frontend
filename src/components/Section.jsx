import { cn } from '@/lib/utils';

export default function Section({
  boxedWidth = false,
  children,
  sectionId,
  title,
}) {
  return (
    <section className="py-5" id={sectionId}>
      <div
        className={cn('w-full', {
          'max-w-5xl mx-auto px-5': boxedWidth,
        })}
      >
        {title && (
          <h2 className="text-center text-2xl md:text-[40px] pt-16 md:pt-[120px]">
            {title}
          </h2>
        )}
        <div className="py-24">{children}</div>
      </div>
    </section>
  );
}
