import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const CartHeader = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <CartProductList
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
            ></CartProductList>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartHeader
