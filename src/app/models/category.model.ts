export interface Category {
  id?: number;
  title: string;
  description?: string | undefined;
  slug: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
