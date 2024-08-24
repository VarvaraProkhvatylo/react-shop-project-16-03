import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    id: number
    image: string
    title: string
    description: string
    type: string
    capacity: string
    price: number
    addProductsToCart: (count: number, id: number) => void
}

const ProductListItem = ({
    id,
    image,
    title,
    description,
    type,
    capacity,
    price,
    addProductsToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const onIncrementClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <>
            <Card variant="outlined" className="product-list-item">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h3 className="product-title">{title}</h3>
                    <p className="product-description">{description}</p>

                    <div className="product-features">Type: {type}</div>

                    <div className="product-features">
                        Capacity: {capacity} GB
                    </div>
                    <div className="product-price">$ {price}</div>
                    <Quantity
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                        count={count}
                        minCount={1}
                    />

                    <div className="btns-wrapper">
                        <Button
                            variant="outlined"
                            onClick={() => addProductsToCart(id, count)}
                        >
                            Add to cart
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
