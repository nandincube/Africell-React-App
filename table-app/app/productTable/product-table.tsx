
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductTableBody } from './product-table-body';
import type { ProductTableProps } from '~/types/ProductTableProps';

export function ProductTable({products}: ProductTableProps) {
  return (
     <TableContainer component={Paper} className="h-[65vh] w-[80vw] mb-10 bg-purple-100! border-purple-400! border">
      <Table stickyHeader 
      >
        <TableHead 
        >
          <TableRow className="underline decoration-purple-500/30  *:bg-purple-300!  "
          >
            <TableCell className='bg-purple-200!'>Stock</TableCell>
            <TableCell className="max-w-[10vw]" align="center">Name</TableCell>
            <TableCell className="max-h-[5vh] w-1/4 whitespace-pre-wrap overflow-auto" align="center">Description</TableCell>
            <TableCell align="center">Allergens</TableCell>
            <TableCell align="center">Price (£)</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <ProductTableBody products={products}/>
      </Table>
    </TableContainer>
  );
}
  