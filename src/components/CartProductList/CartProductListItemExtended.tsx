import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product: Product
    productsCount: number
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    product,
    productsCount,
    removeProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image}></img>
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <div>Count: {productsCount}</div>
                    <Button variant="outlined">
                        <DeleteIcon
                            removeProductFromCart={removeProductFromCart}
                        />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
