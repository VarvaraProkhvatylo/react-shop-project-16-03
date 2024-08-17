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

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {productsInCart[+productId]}
                    </div>
                ))}
            </div>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartHeader
