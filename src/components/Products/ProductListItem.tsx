import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'

type Props = {
    image: string
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductListItem = ({
    image,
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    const [count, setCount] = useState<number>(2)
    const [color, setColor] = useState<string>('green')

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const toggleColorChange = () => {
        setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
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
                    <div>
                        <div>
                            Color: <span className={`${color}`}>{color}</span>
                        </div>
                        <button onClick={toggleColorChange}>
                            Change color
                        </button>
                    </div>
                    <div className="product-features">
                        Capacity: {capacity} GB
                    </div>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button variant="outlined" onClick={onDecrementClick}>
                            -
                        </Button>
                        <TextField size="small" value={count} />
                        <Button
                            variant="outlined"
                            onClick={() =>
                                setCount((prevCount) => prevCount + 1)
                            }
                        >
                            +
                        </Button>
                    </div>
                    <div className="btns-wrapper">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
