export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  comment: string;
}