import Container from "@/components/Container";
import BuildingsFilterShell from "@/components/BuildingsFilterShell";
import { getProducts } from "@/lib/content";

export const metadata = {
  title: "Our Buildings – Nordic Garden Buildings",
  description:
    "Explore Nordic Garden Buildings’ range of insulated PVC-u garden rooms, offices, pavilions, orangeries, greenhouses and summerhouses."
};

export default function BuildingsPage() {
  const allProducts = getProducts();

  return (
    <section className="py-10">
      <Container>
        <h1 className="text-3xl font-bold text-primary">Our Buildings</h1>
        <p className="mt-2 text-sm text-secondary">
          Browse insulated PVC-u studios, garden offices, pavilions, orangeries,
          greenhouses and summerhouses. Use the filters to narrow down by type
          and colour.
        </p>
        <BuildingsFilterShell products={allProducts} />
      </Container>
    </section>
  );
}
