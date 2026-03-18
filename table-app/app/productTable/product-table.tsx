
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { ProductTableProps } from '~/types/ProductTableProps';
import { ProductTableBody } from './product-table-body';

export function ProductTable({products}: ProductTableProps) {

  return (
     <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Allergens</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <ProductTableBody products={products} />
      </Table>
    </TableContainer>
  );
}
  