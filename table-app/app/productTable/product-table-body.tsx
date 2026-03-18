import type { ProductTableBodyProps } from "~/interfaces/ProductTableBodyProps";
import { ProductTableRow } from "./product-table-row";
import { TableBody } from "@mui/material";

export function ProductTableBody(rows: Array<ProductTableBodyProps>) {
return (
        <TableBody>
          {rows.map((row: ProductTableBodyProps) => (
            <ProductTableRow key={row.name} {...row} />
          ))}
        </TableBody>
);
}