import type { Product } from "~/interfaces/Product";
import type { Request, Response } from 'express';
import express from "express"

const app = express();
const port = 3000
app.use(express.json());

let data: Array<Product> = [
    { id: 1, name: "Nescafe Latte Sachets 12s ", description: "75 Calories Per Mug. Low Fat When Prepared. No Artificial Flavours. Suitable for vegetarians.Every cup you drink can help make a difference This NESCAFÉ Latte is made using 100% responsibly sourced coffee, supporting coffee farmers to improve their lands and livelihoods.", allergens: ["Dairy"], price: 2.50, stock: 40 },
    {
        id: 2, name: "Bonne Maman Sweet and Crunchy Peanut Spread",
        description: "Creamy Peanut Spread. Bonne Maman Sweet & Crunchy Peanut Spread is a delicious blend of toasted peanuts with subtle hints of vanilla and cocoa butter. Perfect for elevating your morning when simply popped onto warm toast or making a delicious, indulgent afternoon snack when added to a slice of cake or banana bread.",
        allergens: ["Peanuts"], price: 3.00, stock: 20
    },
    { id: 3, name: "2 Mediterranenan Sea Bass Fillet", description: "These sea bass fillets have a subtle sweetness and delicate, buttery flesh. Pan-fried, they're delicious enjoyed with minted peas, or slice and add to a Keralan-style curry sauce made with turmeric and coconut milk. High in protein and omega-3, our sea bream. comes from farms that have been independently certified by the Aquaculture Stewardship Council. Responsibly farmed in Turkey", allergens: ["Fish"], price: 7.25, stock: 40 },
    { id: 4, name: "Jacksons Soft White Bloome", description: "Source of Protein & No Artificial Preservatives. Suitable for Vegans.Our Deliciously Soft & Tasty Signature White Bloomer We've been proud bakers of Yorkshire for generations, continually refining and crafting to bring you the very best. We bake with pride, honesty and our traditional Yorkshire spirit, to create tasty baked goods for you and your family. Our passion for baking gives you a loaf we're proud to put our Jacksons name to. This loaf is a source of protein, is soya and palm oil free, and is vegetarian and vegan friendly too.", allergens: [], price: 17.25, stock: 50 },
    { id: 5, name: "Salmon Quiche", description: "Quiche with Salmon", allergens: ["Shellfish", "Eggs"], price: 8.00, stock: 80 }
]

app.get("/products", (req: Request, res: Response) => {
    res.json(data);
});

app.delete("/products/:id", (req: Request, res: Response) => {
    if (data.find((item) => item.id != Number(req.params.id)) === undefined) {
        res.sendStatus(404)
    }
    data = data.filter((item) => item.id != Number(req.params.id))
    res.sendStatus(200);
});

app.post("/products", (req: Request, res: Response) => {
    let product: Product = req.body
    data.push(product)
    res.sendStatus(200)
}
)

app.put("/products", (req: Request, res: Response) => {
    let product: Product = req.body
    let index = data.findIndex((item) => {
        return product.id === item.id
    })

    if (index >= 0) {
        data[index] = product
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
}
)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

