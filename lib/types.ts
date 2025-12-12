export type Brand = {
  brandName: string;
  tagline: string;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  sizeRangeMeters: string;
  sizeRangeFeet: string;
  availableColours: string[];
  heroImage: string;
};

export type Testimonial = {
  name: string;
  roleOrLocation?: string;
  quote: string;
  source?: string;
  yearsAgo?: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTimeMinutes: number;
  excerpt: string;
  heroImage: string;
  bodyMarkdownPath: string;
  tags: string[];
  isFeatured: boolean;
};
