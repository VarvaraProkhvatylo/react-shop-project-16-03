import { useAppSelector } from 'store/hooks'
import CartTotal from '../../components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <CartProductList productsInCart={productsInCart}></CartProductList>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartHeader
