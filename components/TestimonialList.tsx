import { Testimonial } from "@/lib/types";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialList({ testimonials }: Props) {
  if (!testimonials.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-center text-2xl font-semibold text-primary">
        What our customers say
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-lg border bg-white p-4 text-sm shadow-sm"
          >
            <blockquote className="text-secondary">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs font-semibold text-primary">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
