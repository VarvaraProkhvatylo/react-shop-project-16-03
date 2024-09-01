import { Container, Grid, Typography } from '@mui/material'
import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from 'store/hooks'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import { Link } from 'react-router-dom'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, quantity: number) => void
}

const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
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
                        changeProductQuantity={changeProductQuantity}
                    ></CartProductList>
                </Grid>

                <CartTotal productsInCart={productsInCart}></CartTotal>

                <Link to="/checkout">Proceed to checkout </Link>
            </Container>
        </div>
    )
}

export default CartPage
