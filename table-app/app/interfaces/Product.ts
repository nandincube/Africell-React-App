import type { Allergen } from "../types/Allergen"

export interface Product{
  id: number,
  name: string,
  description: string,
  allergens: Array<Allergen>,
  price: number,
  stock: number
}

export interface Products{
  items: Array<Product>
}