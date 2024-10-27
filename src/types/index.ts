export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  challenge: string;
  solution: string;
  benefit: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}