import { Category } from '../models/category.model';

export interface Habitat {
  id?: number; // L'ID est facultatif (peut être omis pour la création)
  title: string;
  description: string;
  slug: string;
  location: string;
  city: string;
  country: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string[]; // Tableau des commodités disponibles
  availability: string[]; // Tableau des disponibilités
  createdAt?: string; // Date de création, facultative
  updatedAt?: string; // Date de mise à jour, facultative
  owner?: any; // Propriété pour le propriétaire (type à préciser si nécessaire)
  category: string | Category; // Peut être une chaîne (ID) ou un objet Category
  images: { url: string }[]; // Tableau d'objets contenant des URLs pour les images
  startDate: Date; // Date de début pour la disponibilité ou autre
  endDate: Date; // Date de fin pour la disponibilité ou autre
}
