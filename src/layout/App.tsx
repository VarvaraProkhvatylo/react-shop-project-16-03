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
        2: 13,
    })

    const addProductsToCart = (id: number, count: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductsToCart={addProductsToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
