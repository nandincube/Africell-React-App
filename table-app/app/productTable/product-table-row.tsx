import { Chip, TableCell, TableRow } from "@mui/material"
import type { Allergen } from "../types/Allergen"
import type { Product } from "../interfaces/Product"
import { useAppDispatch } from "~/hooks"
import { fetchAddProduct, fetchDeleteProduct, fetchUpdateProduct } from "~/state/productsSlice"

type ProductTableRowProps = {
  key: string,
  item: Product
}
export function ProductTableRow({ key, item }: ProductTableRowProps) {
  const dispatch = useAppDispatch()


  const deleteProduct = (name: string) => {
    dispatch(fetchDeleteProduct(name))
  }

  const addProduct = (item: Product) => {
    dispatch(fetchAddProduct(item))
  }

  const updateProduct = (item: Product) => {
    dispatch(fetchUpdateProduct(item))
  }

  const allergenChip = (allergen: Allergen) => {
    return (<Chip label={allergen} color="secondary" />)
  }

  return (
    <TableRow
      key={key}
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