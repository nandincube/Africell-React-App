import { Alert, Grid, Typography, type AlertProps } from "@mui/material";
import { useState } from "react";
import type {Products} from "~/interfaces/Product";
import { ProductTable } from "~/productTable/product-table";
import { useAppSelector, useAppDispatch } from 'app/hooks'


export default function Products() {
  const [displayAlert, setDisplayAlert] = useState<boolean>(false);
  const [alertStatus, setAlertStatus] = useState<AlertProps['severity']>('success');
  const [alertMessage, setAlertMessage] = useState<string>("");
  const data = useAppSelector((state) => state.products);

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
            {data &&
            <ProductTable products={data} />}
          </section>
        </Grid>
      </div>
    </main>
  );
}