import { Container } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductsToCart: (count: number, id: number) => void
}

const Main = ({ addProductsToCart }: Props) => {
    return (
        <>
            <Container
                sx={{
                    padding: '30px 0',
                }}
                className="main-container"
            >
                <ProductsList addProductsToCart={addProductsToCart} />
            </Container>
        </>
    )
}

export default Main
