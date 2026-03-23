import { Button, Chip, Stack, TableCell, TableRow } from "@mui/material"
import type { Allergen } from "../types/Allergen"
import type { Product } from "../interfaces/Product"
import { useAppDispatch } from "~/hooks"
import { deleteProduct, addProduct, updateProduct } from "~/state/productsSlice"
import { useState } from "react"
import { ProductForm } from "~/ProductForm/product-form"
import { showAlert } from "~/state/eventSlice"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

type ProductTableRowProps = {
  item: Product
}
export function ProductTableRow({ item }: ProductTableRowProps) {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)


  const deleteItem = (id: number) => {
    dispatch(deleteProduct(id))
    dispatch(showAlert({ status: 'success', message: 'Product deleted successfully' }))

  }

  const allergenChip = (allergen: Allergen) => {
    return (<Chip label={allergen} color="secondary" />)
  }

  return (
    <TableRow
      key={item.id}
      className="even:bg-purple-200/50!"
      sx={{
        maxHeight: "10vh",
        overflow: "auto"
      }}
    >
      <TableCell component="td" scope="row">
        {item.stock}
      </TableCell>
      <TableCell className="max-w-[10vw] text-wrap" align="center">{item.name}</TableCell>
      <TableCell className="max-h-[5vh]! max-w-[50vw]! whitespace-pre-wrap overflow-auto!" align="left">{item.description}</TableCell>
      <TableCell className= "w-[20vw]! flex-row overflow-auto!" align="center">
        {item.allergens.map((allergen) => allergenChip(allergen))}
      </TableCell>
      <TableCell align="center">{new Intl.NumberFormat("en-IN", { minimumSignificantDigits: 3 }).format(
        item.price,
      )}</TableCell>
      <TableCell align="center" className="w-[2vw]">
        <ProductForm item={item} open={open} setOpen={setOpen} isAdd={false} />
        <Stack spacing={1} direction="column" justifyContent="center">
          <Button size="small" variant="contained" className="bg-purple-400!" onClick={() => setOpen(true)}>
            <EditIcon />
          </Button>
          <Button size="small" variant="contained" className="bg-purple-700!" onClick={() => deleteItem(item.id)}>
            <DeleteIcon />
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}