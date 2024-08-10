import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type ProductsInCartType = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 15,
    })

    const addProduct = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            [id]: prevState[id] + count,
        }))
    }

    const addProductsToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            [id]: prevState[id] + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProduct(2, 5)}>
                {' '}
                Add Product to Cart (id: 2, count: 5)
            </button>
            <Main addProductsToCart={addProductsToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
