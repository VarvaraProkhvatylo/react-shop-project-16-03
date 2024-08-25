import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductsToCart: (id: number, count: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
    likeProduct: (id: number, isLiked: boolean) => void
}

const Home = ({ addProductsToCart, productsLikeState, likeProduct }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList
                addProductsToCart={addProductsToCart}
                productsLikeState={productsLikeState}
                likeProduct={likeProduct}
            />
            <Reviews />
        </Container>
    )
}
export default Home
