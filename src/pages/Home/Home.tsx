import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
type Props = {
    addProductsToCart: (id: number, count: number) => void
    // disabled: boolean
}
const Home = ({ addProductsToCart }: Props) => {
    return (
        <Container className="main-container" component={'div'}>
            <ProductsList
                addProductsToCart={addProductsToCart}
                // disabled={disabled}
            />
        </Container>
    )
}
export default Home
