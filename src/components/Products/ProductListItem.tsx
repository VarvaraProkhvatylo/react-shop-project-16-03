import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import likeSlice, { addLike, removeLike } from 'store/likeSlice'
import { addProductToCart } from 'store/cartSlice'
import { Link } from 'react-router-dom'

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
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const onIncrementClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <>
            <Card variant="outlined" className="product-list-item">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id))
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <h3 className="product-title">
                        <Link to={`/products/${id}`}>{title}</Link>
                    </h3>
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
                            onClick={() =>
                                dispatch(addProductToCart({ id, count }))
                            }
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
