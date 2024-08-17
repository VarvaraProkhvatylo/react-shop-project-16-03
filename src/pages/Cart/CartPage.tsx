import { Container } from '@mui/material'
import { getProductsObject, Product, productsArray } from 'utils/productsArray'

import CartTotal from '../../components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Container>
                <div>Cart</div>
                <div>
                    {Object.keys(productsInCart).map((productId) => (
                        <div key={productId}>
                            {productsObject[+productId].title}:{' '}
                            {productsInCart[+productId]} : price for one item -{' '}
                            {productsObject[+productId].price}$
                        </div>
                    ))}
                </div>
                <CartTotal productsInCart={productsInCart}></CartTotal>
            </Container>
        </div>
    )
}
export default CartPage
