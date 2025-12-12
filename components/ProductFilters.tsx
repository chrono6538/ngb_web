"use client";

import { Product } from "@/lib/types";
import { useMemo, useState, useEffect } from "react";

type Props = {
  products: Product[];
  onFilteredChange: (products: Product[]) => void;
};

const TYPES_ORDER = [
  "Studio",
  "Garden Office",
  "Summerhouse",
  "Orangerie",
  "Pavilion",
  "Stretched Pavilion",
  "Greenhouse"
];

export default function ProductFilters({ products, onFilteredChange }: Props) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColour, setSelectedColour] = useState<string | null>(null);

  const { types, colours } = useMemo(() => {
    const typeSet = new Set<string>();
    const colourSet = new Set<string>();
    products.forEach((p) => {
      typeSet.add(p.type);
      p.availableColours.forEach((c) => colourSet.add(c));
    });
    return {
      types: Array.from(typeSet).sort(
        (a, b) => TYPES_ORDER.indexOf(a) - TYPES_ORDER.indexOf(b)
      ),
      colours: Array.from(colourSet).sort()
    };
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const typeMatch = selectedType ? p.type === selectedType : true;
      const colourMatch = selectedColour
        ? p.availableColours.includes(selectedColour)
        : true;
      return typeMatch && colourMatch;
    });
  }, [products, selectedType, selectedColour]);

  useEffect(() => {
    onFilteredChange(filtered);
  }, [filtered, onFilteredChange]);

  return (
    <div className="mb-6 flex flex-wrap gap-4 rounded-lg border bg-white p-4 text-sm">
      <div>
        <div className="mb-1 font-semibold text-primary">Type</div>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            label="All"
            active={selectedType === null}
            onClick={() => setSelectedType(null)}
          />
          {types.map((t) => (
            <FilterChip
              key={t}
              label={t}
              active={selectedType === t}
              onClick={() => setSelectedType(t)}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-1 font-semibold text-primary">Colour</div>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            label="All"
            active={selectedColour === null}
            onClick={() => setSelectedColour(null)}
          />
          {colours.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={selectedColour === c}
              onClick={() => setSelectedColour(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterChip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 ${
        active
          ? "border-primary bg-primary text-white"
          : "border-gray-300 bg-white text-secondary hover:border-primary"
      }`}
    >
      {label}
    </button>
  );
}
