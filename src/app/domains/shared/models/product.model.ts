import {Category} from "@shared/models/category.model";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  creationAt: string;
}
