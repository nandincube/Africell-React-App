import { Alert, Button, Grid, Tooltip, Typography, type AlertProps } from "@mui/material";
import { useState } from "react";
import { ProductTable } from "~/productTable/product-table";
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { ProductForm } from "~/ProductForm/product-form";
import { hideAlert } from "~/state/eventSlice";
import AddIcon from '@mui/icons-material/Add';


export default function ProductsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const data = useAppSelector((state) => state.products);
  const alertState = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch()

  return (
    <main >
      <div className="flex flex-col justify-center items-center mb-5">
        {/*<Grid container spacing={2} padding ={2} direction="column" alignItems="center" justifyContent="center">*/}
        <header className="mt-5">
          <Typography variant="h1" className="text-purple-900"> Products</Typography>
        </header>
        <section className="p-10">
          < div className="flex justify-center">
            {alertState.displayAlert && <Alert severity={alertState.alertStatus} onClose={() => dispatch(hideAlert())}>{alertState.alertMessage}</Alert>}
          </div>
          {data &&
            <div className="flex flex-col content-end justify-start gap-2">
              <ProductForm open={open} setOpen={setOpen} isAdd={true} />
              < div className="flex justify-end">
                <Tooltip title="Add Product">
                  <Button className="flex-initial bg-purple-700!" variant="contained" onClick={() => setOpen(true)}>
                    <AddIcon />
                  </Button>
                </Tooltip>
              </div>
              <ProductTable products={data} />
            </div>}
        </section>
        {/*</Grid>*/}
      </div>
    </main>
  );
}