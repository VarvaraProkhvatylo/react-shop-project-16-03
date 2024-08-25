import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addProductsToCart: (count: number, id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

console.log(productsArray)

const ProductsList = ({
    addProductsToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{ marginBottom: '30px' }}
            >
                Product List
            </Typography>
            <Grid container spacing={2}>
                {productsArray.map(
                    ({
                        image,
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductsToCart={addProductsToCart}
                                isLiked={productsLikeState[id]}
                                toggleLikeState={toggleLikeState}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
