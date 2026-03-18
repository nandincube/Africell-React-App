import { Alert, Grid, Typography, type AlertProps } from "@mui/material";
import { useState } from "react";
import type {Products} from "~/interfaces/Product";
import { ProductTable } from "~/productTable/product-table";
import { useGetAllProductsQuery } from "~/state/apiSlice";

export default function Products( products : Products) {
  const [displayAlert, setDisplayAlert] = useState<boolean>(false);
  const [alertStatus, setAlertStatus] = useState<AlertProps['severity']>('success');
  const [alertMessage, setAlertMessage] = useState<string>("");
  const { data, error, isLoading } = useGetAllProductsQuery()

  const showAlert = (status: AlertProps['severity'], message: string) => {
    setAlertStatus(status);
    setAlertMessage(message);
    setDisplayAlert(true);
  }
  const alert = (status: AlertProps['severity'], message: string) => {
    return <Alert severity={status} onClose={() => setDisplayAlert(false)}>{message}</Alert>;
  }


  return (
    <main>
      <div>
        {displayAlert && alert(alertStatus, alertMessage)}
        <Grid>
          <header>
            <Typography variant="h1"> Products</Typography>
          </header>
          <section>
            <ProductTable products={products} />
          </section>
        </Grid>
      </div>
    </main>
  );
}