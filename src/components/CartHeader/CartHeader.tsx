type Props = {
    productsInCart: {
        [id: number]: number
        // [price: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}: {productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
