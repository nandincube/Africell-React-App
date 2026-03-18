import { ProductTableRow } from "./product-table-row";
import { TableBody } from "@mui/material";
import type {Product} from "~/interfaces/Product";
import type { ProductTableProps } from "~/types/ProductTableProps";


export function ProductTableBody({products}: ProductTableProps) {
return (
        <TableBody>
          {products.items.map((item: Product) => (
            <ProductTableRow key={item.name} item={item}/>
          ))}
        </TableBody>
);
}