import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart}></CartProductList>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartHeader
