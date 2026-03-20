import { Button, Chip, TableCell, TableRow } from "@mui/material"
import type { Allergen } from "../types/Allergen"
import type { Product } from "../interfaces/Product"
import { useAppDispatch } from "~/hooks"
import {deleteProduct, addProduct, updateProduct} from "~/state/productsSlice"
import { useState } from "react"
import { ProductForm } from "~/ProductForm/product-form"

type ProductTableRowProps = {
  key: number,
  item: Product
}
export function ProductTableRow({ key, item }: ProductTableRowProps) {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)


  const deleteItem = (id: number) => {
    dispatch(deleteProduct(id))
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
      <TableCell align="center">
        <ProductForm item={item} open={open} setOpen={setOpen} isAdd={false}/>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" onClick={() => deleteItem(item.id)}>
        Delete
      </Button>
      </TableCell>
    </TableRow>
  );
}