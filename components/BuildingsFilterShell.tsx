"use client";

import { useState } from "react";
import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type Props = {
  products: Product[];
};

export default function BuildingsFilterShell({ products }: Props) {
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
