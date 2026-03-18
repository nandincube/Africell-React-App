import { Chip, TableCell, TableRow } from "@mui/material"
import type { Allergen } from "../types/Allergen"
import type { Product } from "../interfaces/Product"

type ProductTableRowProps = {
  item: Product
}
export function ProductTableRow({ item }: ProductTableRowProps) {
  const allergenChip = (allergen: Allergen) => {
    return (<Chip label={allergen} color="secondary" />)
  }

  return (
    <TableRow
      key={item.name}
    >
      <TableCell component="td" scope="row">
        {item.stock}
      </TableCell>
      <TableCell align="center">{item.name}</TableCell>
      <TableCell align="center">{item.description}</TableCell>
      <TableCell align="justify">
        {item.allergens.map((allergen) => allergenChip(allergen))}
      </TableCell>
      <TableCell align="center">{item.price}</TableCell>
    </TableRow>
  );
}