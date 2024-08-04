type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    console.log(Object.keys(productsInCart))
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
