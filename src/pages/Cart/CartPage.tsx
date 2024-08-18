import { Container, Grid, Typography } from '@mui/material'
import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Container>
                <Typography
                    variant="h4"
                    component={'h1'}
                    sx={{ margin: '40px 0' }}
                >
                    Cart
                </Typography>
                <Grid container spacing={4} sx={{ marginBottom: '30px' }}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                        removeProductFromCart={removeProductFromCart}
                    ></CartProductList>
                </Grid>

                <CartTotal productsInCart={productsInCart}></CartTotal>
            </Container>
        </div>
    )
}

export default CartPage
