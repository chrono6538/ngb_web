import Link from "next/link";
import { Product } from "@/lib/types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="h-48 bg-gray-100">
        <div className="flex h-full items-center justify-center text-xs text-gray-400">
          {product.heroImage}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-wide text-secondary">
          {product.type}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-primary">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-secondary">
          Sizes: {product.sizeRangeMeters} ({product.sizeRangeFeet})
        </p>
        <p className="mt-2 text-xs text-secondary">
          Colours: {product.availableColours.join(", ")}
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            href={`/buildings/${product.id}`}
            className="text-sm font-semibold text-accent hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
