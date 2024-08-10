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
        1: 0,
        2: 0,
    })

    const addProductsToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    // const addCountTotal = ([productsInCart], price: number, count: number) => {
    //     setCountTotal((prevState) => ({
    //         ...prevState,
    //         price: (prevState.price)
    //     }))
    // }

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
