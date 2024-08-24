import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductsToCart: (id: number, count: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}

const Home = ({ addProductsToCart, productsLikeState }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList
                addProductsToCart={addProductsToCart}
                productsLikeState={productsLikeState}
            />
            <Reviews />
        </Container>
    )
}
export default Home
