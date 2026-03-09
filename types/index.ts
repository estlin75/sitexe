// Miejsce na globalne typy TypeScript, np. integracje API
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}