import Container from "@/components/Container";
import { Button } from "@/components/Button";
import TestimonialList from "@/components/TestimonialList";
import { getProducts, getTestimonials } from "@/lib/content";

export default function HomePage() {
  const products = getProducts();
  const testimonials = getTestimonials();

  const featured = products.slice(0, 3);

  return (
    <>
      <section className="bg-gray-50 py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Insulated PVC-u Garden Buildings
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Enjoy comfortable garden living all year round.
              </h1>
              <p className="mt-4 text-sm text-secondary">
                Nordic Garden Buildings manufacture low-maintenance, double
                glazed, fully installed garden rooms, offices, pavilions and
                greenhouses from our factories in South Wales, supplied via a
                UK-wide network of show sites and partners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/buildings">See our product ranges</Button>
                <Button href="/contact" variant="secondary">
                  Request brochure
                </Button>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-secondary sm:grid-cols-4">
                <div>
                  <dt className="font-semibold text-primary">Maintenance free</dt>
                  <dd>PVC-u construction for easy care.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">UK manufactured</dt>
                  <dd>Built in South Wales factories.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Free installation</dt>
                  <dd>Delivered & installed in the UK.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Double glazed</dt>
                  <dd>Comfortable in every season.</dd>
                </div>
              </dl>
            </div>
            <div className="h-64 rounded-lg bg-gray-200 md:h-80">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Hero lifestyle image (add later)
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-primary">
            Featured buildings
          </h2>
          <p className="mt-2 text-sm text-secondary">
            A small selection from our studios, garden offices, pavilions,
            orangeries, greenhouses and summerhouses.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <div key={p.id} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm">
                  <div className="h-40 bg-gray-100 text-xs text-gray-400">
                    <div className="flex h-full items-center justify-center">
                      {p.heroImage}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-xs uppercase tracking-wide text-secondary">
                      {p.type}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-primary">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs text-secondary">
                      Sizes: {p.sizeRangeMeters}
                    </p>
                    <Button href={`/buildings/${p.id}`} variant="ghost">
                      View details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-semibold text-primary">
            Buildings for every use
          </h2>
          <p className="mt-2 text-sm text-secondary">
            From compact studios to generous orangeries and multi-use
            pavilions, there&apos;s a Nordic building for every garden and use
            case.
          </p>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-primary">Garden rooms & studios</h3>
              <p className="mt-2 text-secondary">
                Create a light, insulated space for relaxing, hobbies or extra
                living area.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-primary">Garden offices</h3>
              <p className="mt-2 text-secondary">
                Quiet, dedicated workspaces designed for calls, meetings and
                focused work.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-primary">
                Pavilions, orangeries & greenhouses
              </h3>
              <p className="mt-2 text-secondary">
                Entertaining spaces, dining rooms, hobby rooms and growing
                spaces that work all year round.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <TestimonialList testimonials={testimonials} />
      </Container>

      <section className="mt-12 bg-primary py-10 text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Ready to talk about your garden building?
              </h2>
              <p className="mt-2 text-sm text-gray-100">
                Ask us a question, request a brochure or planning guide, or tell
                us about the building you&apos;re considering.
              </p>
            </div>
            <Button href="/contact" variant="secondary">
              Contact the team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
