import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }

    productsLikeState: {
        [id: number]: boolean
    }
}

const CartHeader = ({ productsInCart, productsLikeState }: Props) => {
    return (
        <div>
            <CartProductList
                productsInCart={productsInCart}
                productsLikeState={productsLikeState}
            ></CartProductList>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartHeader
