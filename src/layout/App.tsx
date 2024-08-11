import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import ProductsPage from 'pages/Products/ProductsPage'
import PaymentPage from 'pages/Payment/PaymentPage'

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

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductsToCart={addProductsToCart} />}
                />
                <Route path="cart" element={<CartPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="products" element={<ProductsPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
