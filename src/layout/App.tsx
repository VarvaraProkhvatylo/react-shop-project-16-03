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
import { getProductsObject } from 'utils/productsArray'
import { omit } from 'lodash'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import ProductPage from 'pages/Product/ProductPage'

type ProductsInCartType = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 3,
        2: 3,
    })

    const addProductsToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, quantity: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: quantity,
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
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    }
                />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<ProductPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
