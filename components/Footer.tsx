import Container from "./Container";
import { getBrand } from "@/lib/content";

const USP_STRAPLINES = [
  "MAINTENANCE FREE",
  "UK MANUFACTURED",
  "FREE UK INSTALLATION",
  "DOUBLE GLAZED"
];

export default function Footer() {
  const brand = getBrand();

  return (
    <footer className="mt-16 border-t bg-gray-50 py-10 text-sm text-secondary">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-primary">{brand.brandName}</h3>
            <p className="mt-2">{brand.tagline}</p>
            <p className="mt-3">
              <strong>Email:</strong> info@nordicgardenbuildings.com
              <br />
              <strong>Tel:</strong> 0800 160 1710
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary">Our Guarantees</h4>
            <ul className="mt-2 space-y-1">
              {USP_STRAPLINES.map((usp) => (
                <li key={usp}>• {usp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary">Legal</h4>
            <p className="mt-2">
              Trading style of Modplan Ltd. Registered office: Imperial Bldg,
              Bridge St, Abercarn, Newport NP11 4SB, United Kingdom.
            </p>
            <ul className="mt-2 space-y-1">
              <li>Terms &amp; Conditions (placeholder)</li>
              <li>Privacy Policy (placeholder)</li>
              <li>Cookie Policy (placeholder)</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} {brand.brandName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
