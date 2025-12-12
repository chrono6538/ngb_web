import Link from "next/link";
import Container from "./Container";
import { getBrand } from "@/lib/content";

export default function Header() {
  const brand = getBrand();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/buildings", label: "Our Buildings" },
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQs" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">
              {brand.brandName}
            </span>
            <span className="text-xs text-secondary">{brand.tagline}</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
