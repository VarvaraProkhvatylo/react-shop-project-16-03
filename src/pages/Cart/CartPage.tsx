import { Container } from '@mui/material'
import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Container>
                <div>Cart</div>
                <CartProductList
                    productsInCart={productsInCart}
                ></CartProductList>
                <CartTotal productsInCart={productsInCart}></CartTotal>
            </Container>
        </div>
    )
}

export default CartPage
