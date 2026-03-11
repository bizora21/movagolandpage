export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'payments' | 'drivers' | 'safety';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DriverForm {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  hasVehicle: boolean;
  vehicleType: 'car' | 'motorcycle' | 'tuktuk';
  experience: string;
  availability: string;
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    images: { url: string; width: number; height: number }[];
    locale: string;
    type: string;
  };
}