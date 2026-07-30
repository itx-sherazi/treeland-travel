export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold leading-tight text-[#1f2937] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
