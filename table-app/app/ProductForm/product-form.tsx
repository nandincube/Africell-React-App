import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Stack, TextField } from "@mui/material"
import { useForm, type SubmitHandler, Controller } from "react-hook-form"
import { useAppDispatch } from "~/hooks"
import type { Product } from "~/interfaces/Product"
import { showAlert } from "~/state/eventSlice"
import { addProduct, updateProduct } from "~/state/productsSlice"
import type { Allergen } from "~/types/Allergen"

interface ProductFormProps {
    item?: Product,
    open: boolean,
    isAdd: boolean,
    setOpen: (open: boolean) => void,
}

export function ProductForm({ item, open, isAdd, setOpen }: ProductFormProps) {
    const dispatch = useAppDispatch()
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<Product>(
        {
            defaultValues: {
                id: item?.id,
                name: item?.name || "",
                description: item?.description || "",
                allergens: item?.allergens || [],
                price: item?.price || 0.00,
                stock: item?.stock || 0
            }
        }
    )

    const isChecked = (value: any, allergen: Allergen) => {
        const allergens = value as Array<Allergen>
        return allergens.includes(allergen)
    }

    const onSubmit: SubmitHandler<Product> = (data) => {
        console.log(data)
        if (isAdd) {
            dispatch(addProduct(data))
            dispatch(showAlert({ status: 'success', message: 'Product added successfully' }))
            reset()
        } else {
            dispatch(updateProduct(data))
            dispatch(showAlert({ status: 'success', message: 'Product updated successfully' }))
            reset()
        }
        setOpen(false)

    }

    const onChangeAllergens = (value: any, allergen: Allergen, onChange: (value: any) => void) => {
        const allergens = value as Array<Allergen>
        if (allergens.includes(allergen)) {
            onChange(allergens.filter((item) => item !== allergen))
        } else {
            onChange([...allergens, allergen])
        }

    }

    const handleClose = () => {
        setOpen(false)
        reset()
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>{isAdd ? "Add Product" : "Edit Product"}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        {isAdd ? "Please fill out the form to add a new product." : "Please update the product details below."}
                    </DialogContentText>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)} id="product-form" >
                        <Stack spacing={2} direction="column" className="[&_label]:font-bold" >
                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 100,
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <label >Name</label>
                                        <TextField
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </>
                                )}
                                name="name"
                            />
                            {errors.name && <span className="text-red-500">Name is required and should be less than 100 characters.</span>}


                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 500,
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <label>Description</label>
                                        <TextField
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            multiline
                                            minRows={4}
                                        />
                                    </>
                                )}
                                name="description"
                            />
                            {errors.description && <span className="text-red-500">Description is required and should be less than 500 characters.</span>}

                            <Controller
                                control={control}
                                rules={{
                                    min: 0,
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <label>Price</label>
                                        <TextField
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </>
                                )}
                                name="price"
                            />
                            {errors.price && <span className="text-red-500">Price is required and should be a positive number.</span>}

                            <Controller
                                control={control}
                                rules={{
                                    min: 0,
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <label>Stock</label>
                                        <TextField
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </>
                                )}
                                name="stock"
                            />
                            {errors.stock && <span className="text-red-500">Stock is required and should be a positive number.</span>}


                            <Controller
                                control={control}
                                rules={{
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <label>Allergens</label>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Gluten")}
                                                    onChange={() => onChangeAllergens(value, "Gluten", onChange)} />}
                                                label="Gluten" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Peanuts")}
                                                    onChange={() => onChangeAllergens(value, "Peanuts", onChange)} />}
                                                label="Peanuts" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Dairy")}
                                                    onChange={() => onChangeAllergens(value, "Dairy", onChange)} />}
                                                label="Dairy" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Soy")}
                                                    onChange={() => onChangeAllergens(value, "Soy", onChange)} />}
                                                label="Soy" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Eggs")}
                                                    onChange={() => onChangeAllergens(value, "Eggs", onChange)} />}
                                                label="Eggs" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Fish")}
                                                    onChange={() => onChangeAllergens(value, "Fish", onChange)} />}
                                                label="Fish" />
                                            <FormControlLabel
                                                control={<Checkbox checked={isChecked(value, "Shellfish")}
                                                    onChange={() => onChangeAllergens(value, "Shellfish", onChange)} />}
                                                label="Shellfish" />
                                        </FormGroup>
                                    </>
                                )}
                                name="allergens"
                            />
                        </Stack>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" form="product-form">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

