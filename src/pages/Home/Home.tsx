import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductsToCart: (id: number, count: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

const Home = ({
    addProductsToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList
                addProductsToCart={addProductsToCart}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Reviews />
        </Container>
    )
}
export default Home
