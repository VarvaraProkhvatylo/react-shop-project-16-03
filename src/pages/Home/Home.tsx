import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductsToCart: (id: number, count: number) => void
}

const Home = ({ addProductsToCart }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList addProductsToCart={addProductsToCart} />
            <Reviews />
        </Container>
    )
}
export default Home
