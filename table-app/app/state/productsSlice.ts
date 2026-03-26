
import { createSlice } from '@reduxjs/toolkit'
import type { Products } from '~/interfaces/Product'


interface initialState extends Products {
    maxIndex : number
}
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            { id: 1, name: "Nescafe Latte Sachets 12s ", description: "75 Calories Per Mug. Low Fat When Prepared. No Artificial Flavours. Suitable for vegetarians.Every cup you drink can help make a difference This NESCAFÉ Latte is made using 100% responsibly sourced coffee, supporting coffee farmers to improve their lands and livelihoods.", allergens: ["Dairy", "Peanuts"], price: 2.50, stock: 40 },
            {
                id: 2,
                name: "Bonne Maman Sweet and Crunchy Peanut Spread",
                description: "Creamy Peanut Spread. Bonne Maman Sweet & Crunchy Peanut Spread is a delicious blend of toasted peanuts with subtle hints of vanilla and cocoa butter. Perfect for elevating your morning when simply popped onto warm toast or making a delicious, indulgent afternoon snack when added to a slice of cake or banana bread.",
                allergens: ["Peanuts"], price: 3.00, stock: 20
            },
            {
                id: 3,
                name: "2 Mediterranenan Sea Bass Fillet", description: "These sea bass fillets have a subtle sweetness and delicate, buttery flesh. Pan-fried, they're delicious enjoyed with minted peas, or slice and add to a Keralan-style curry sauce made with turmeric and coconut milk. High in protein and omega-3, our sea bream. comes from farms that have been independently certified by the Aquaculture Stewardship Council. Responsibly farmed in Turkey", allergens: ["Fish"], price: 7.25, stock: 40
            },
            { id: 4, name: "Jacksons Soft White Bloomer", description: "Source of Protein & No Artificial Preservatives. Suitable for Vegans.Our Deliciously Soft & Tasty Signature White Bloomer We've been proud bakers of Yorkshire for generations, continually refining and crafting to bring you the very best. We bake with pride, honesty and our traditional Yorkshire spirit, to create tasty baked goods for you and your family. Our passion for baking gives you a loaf we're proud to put our Jacksons name to. This loaf is a source of protein, is soya and palm oil free, and is vegetarian and vegan friendly too.", allergens: [], price: 17.25, stock: 50 },
            { id: 5, name: "Salmon Quiche", description: "Quiche with Salmon", allergens: ["Shellfish", "Eggs"], price: 8.00, stock: 80 }
        ],
        maxIndex: 5 //dummy needed to create a new id that does not clash with existing elements
    } as initialState,
    reducers: {
        addProduct: (state, action) => {
            let item = {
                ...action.payload,
                id: ++state.maxIndex //creates new index 
            }
            state.items.push(item)
        },
        updateProduct: (state, action) => {
            let index = state.items.findIndex((item) => {
                return item.id === action.payload.id
            })
            state.items[index] = action.payload
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload
            })
        }
    },
})
export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer

