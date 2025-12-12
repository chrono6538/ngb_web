import fs from "fs";
import path from "path";
import { Brand, Product, Testimonial, BlogPost } from "./types";

const rootDir = process.cwd();

// --- STATIC DATA (no JSON files needed) ------------------------

export const brand: Brand = {
  brandName: "Nordic Garden Buildings",
  tagline: "Modern insulated PVC-u garden rooms, offices & buildings",
};

export const products: Product[] = [
  {
    id: "anglesey",
    name: "Anglesey",
    type: "Summerhouse",
    sizeRangeMeters: "2.50m x 1.90m to 5.65m x 2.80m",
    sizeRangeFeet: "11ft 2in x 6ft 3in to 9ft 2in x 9ft 2in",
    availableColours: [
      "White",
      "Grey",
      "Black",
      "Golden Oak",
      "Irish Oak",
      "Chartwell Green",
    ],
    heroImage: "products/anglesey/hero.jpg",
  },
  {
    id: "madison",
    name: "Madison",
    type: "Studio",
    sizeRangeMeters: "1.90m x 1.90m to 3.10m x 3.10m",
    sizeRangeFeet: "10ft 2in x 10ft 2in to 9ft 2in x 9ft 2in",
    availableColours: [
      "White",
      "Black",
      "Golden Oak",
      "Grey",
      "Chartwell Green",
      "Irish Oak",
    ],
    heroImage: "products/madison/hero.jpg",
  },
  {
    id: "broadway",
    name: "Broadway",
    type: "Garden Office",
    sizeRangeMeters: "2.80m x 1.90m to 5.65m x 2.80m",
    sizeRangeFeet: "110.2in x 74.8in to 222.4in x 110.2in",
    availableColours: [
      "White",
      "Black",
      "Golden Oak",
      "Grey",
      "Chartwell Green",
      "Irish Oak",
    ],
    heroImage: "products/broadway/hero.jpg",
  },
  {
    id: "wiltshire",
    name: "Wiltshire",
    type: "Orangerie",
    sizeRangeMeters: "4.50m x 3.00m",
    sizeRangeFeet: "14ft 9in x 9ft 10in",
    availableColours: [
      "White",
      "Grey",
      "Black",
      "Golden Oak",
      "Rosewood",
      "Chartwell Green",
      "Irish Oak",
    ],
    heroImage: "products/wiltshire/hero.jpg",
  },
  {
    id: "torsa",
    name: "Torsa",
    type: "Greenhouse",
    sizeRangeMeters: "2.40m x 3.20m",
    sizeRangeFeet: "7ft 11in x 10ft 6in",
    availableColours: ["White", "Black", "Golden Oak", "Grey", "Rosewood"],
    heroImage: "products/torsa/hero.jpg",
  },
  {
    id: "victoria",
    name: "Victoria",
    type: "Pavilion",
    sizeRangeMeters: "2.89m x 2.89m to 4.34m x 4.34m",
    sizeRangeFeet: "11ft 1in x 11ft 1in to 9ft 5in x 9ft 5in",
    availableColours: [
      "White",
      "Black",
      "Golden Oak",
      "Grey",
      "Rosewood",
      "Chartwell Green",
      "Irish Oak",
    ],
    heroImage: "products/victoria/hero.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Phil Potter",
    quote:
      "Nordic Garden Buildings provided a superb garden room that we enjoy all year round.",
    source: "Homepage testimonial carousel",
    yearsAgo: 2,
  },
  {
    name: "George Bremner",
    quote:
      "From ordering to installation, the whole process was straightforward and professional.",
    source: "Homepage testimonial carousel",
    yearsAgo: 2,
  },
  {
    name: "Amanda Short",
    quote:
      "The quality of the building and finish has exceeded our expectations.",
    source: "Homepage testimonial carousel",
    yearsAgo: 2,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "planning-permission-garden-rooms-guide",
    title:
      "A Guide to Planning Permission for Garden Rooms: Everything You Need to Know",
    author: "Justin Williams",
    date: "2023-02-01",
    readTimeMinutes: 2,
    excerpt:
      "An overview of when you do and don’t need planning permission for a garden room, plus how permitted development rules apply.",
    heroImage: "blog/planning-permission/hero.jpg",
    bodyMarkdownPath: "blog/planning-permission.md",
    tags: ["Planning", "Garden Rooms"],
    isFeatured: true,
  },
  {
    slug: "transform-your-garden-into-professional-workspace",
    title:
      "Transform Your Garden into a Professional Workspace with our Nordic Garden Office Buildings",
    author: "Justin Williams",
    date: "2023-01-01",
    readTimeMinutes: 2,
    excerpt:
      "How Nordic garden offices create quiet, insulated workspaces for calls, meetings and focused work at home.",
    heroImage: "blog/garden-office-workspace/hero.jpg",
    bodyMarkdownPath: "blog/garden-office-workspace.md",
    tags: ["Garden Office", "Working From Home"],
    isFeatured: true,
  },
  {
    slug: "does-a-garden-studio-add-value",
    title: "Does a Garden Studio Add Value?",
    author: "Justin Williams",
    date: "2022-12-01",
    readTimeMinutes: 6,
    excerpt:
      "Why a well-designed, properly insulated garden studio can be one of the best ways to add value and usable space to your home.",
    heroImage: "blog/garden-studio-value/hero.jpg",
    bodyMarkdownPath: "blog/garden-studio-value.md",
    tags: ["Garden Rooms", "Property Value"],
    isFeatured: false,
  },
];

// --- PUBLIC API ------------------------------------------------

export function getBrand(): Brand {
  return brand;
}

export function getProducts(): Product[] {
  return products;
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Only used for reading optional markdown files (blogs / FAQs etc.)
export function getMarkdown(relativePath: string): string {
  const filePath = path.join(rootDir, "content", relativePath);
  if (!fs.existsSync(filePath)) {
    return "";
  }
  return fs.readFileSync(filePath, "utf-8");
}
