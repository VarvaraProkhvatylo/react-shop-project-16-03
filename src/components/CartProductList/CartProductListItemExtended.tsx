import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productsCount: number
}

const CartProductListItemExtended = ({ product, productsCount }: Props) => {
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
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
