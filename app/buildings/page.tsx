import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { getProducts } from "@/lib/content";
import { Product } from "@/lib/types";
import { useState } from "react";

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
          Browse insulated PVC-u studios, garden offices, pavilions,
          orangeries, greenhouses and summerhouses. Use the filters to narrow
          down by type and colour.
        </p>
        <BuildingsFilterShell products={allProducts} />
      </Container>
    </section>
  );
}

function BuildingsFilterShell({ products }: { products: Product[] }) {
  "use client";

  const [filtered, setFiltered] = useState<Product[]>(products);

  return (
    <>
      <ProductFilters products={products} onFilteredChange={setFiltered} />
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
