import fs from "fs";
import path from "path";
import { Brand, Product, Testimonial, BlogPost } from "./types";

const rootDir = process.cwd();

function readJson<T>(relativePath: string): T {
  const filePath = path.join(rootDir, relativePath);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getBrand(): Brand {
  return readJson<Brand>("brand/brand.json");
}

export function getProducts(): Product[] {
  return readJson<Product[]>("content/products.json");
}

export function getTestimonials(): Testimonial[] {
  return readJson<Testimonial[]>("content/testimonials.json");
}

export function getBlogPosts(): BlogPost[] {
  return readJson<BlogPost[]>("content/blogPosts.json");
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export function getMarkdown(relativePath: string): string {
  const filePath = path.join(rootDir, "content", relativePath);
  if (!fs.existsSync(filePath)) {
    return "";
  }
  return fs.readFileSync(filePath, "utf-8");
}
