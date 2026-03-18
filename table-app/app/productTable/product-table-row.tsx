import { Chip, TableCell, TableRow } from "@mui/material"
import type { Allergen } from "../types/Allergen"
import type { ProductTableBodyProps } from "../interfaces/ProductTableBodyProps"

export function ProductTableRow(props: ProductTableBodyProps) {
  const allergenChip = (allergen: Allergen) => {
    return (<Chip label={allergen} color="secondary" />)
  }

  return (
    <TableRow
      key={props.name}
    >
      <TableCell component="td" scope="row">
        {props.stock}
      </TableCell>
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.description}</TableCell>
      <TableCell align="justify">
        {props.allergens.map((allergen) => allergenChip(allergen))}
      </TableCell>
      <TableCell align="center">{props.price}</TableCell>
    </TableRow>
  );
}