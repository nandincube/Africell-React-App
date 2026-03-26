import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";



export function SuperMartWelcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 ">
      <div className="flex-1 flex flex-col items-center justify-center gap-16 min-h-0 text-purple-950 h-[80vh]">
        <header>
          <Typography variant="h1">Welcome to <span className="bg-linear-to-r from-purple-500 to-purple-950 bg-clip-text text-transparent ">Super Mart!</span></Typography>
        </header>
        <section className="flex flex-col gap-15 items-center">
          <Typography className="text-purple-900"variant="h6">Proceed to product catalogue</Typography>
          <Link className="flex-1" to={`products`}>
          <Button size="large" className="w-[15vw] bg-purple-500!" variant="contained">
            Go
          </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}

