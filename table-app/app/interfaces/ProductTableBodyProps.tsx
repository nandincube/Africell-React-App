import type { Allergen } from "../types/Allergen"

export interface ProductTableBodyProps {
  name: string
  description: string
  allergens: Array<Allergen>
  price: number
  stock: number
}