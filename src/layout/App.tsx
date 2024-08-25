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

type ProductsInCartType = {
    [id: number]: number
}

type ProductsLikeState = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const [productsLikeState, setProductsLikeState] =
        useState<ProductsLikeState>({
            // 1: true,
            // 2: true,
        })

    ///lesson

    const toggleLikeState = (id: number) => {
        setProductsLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    ///
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
            <Header
                productsInCart={productsInCart}
                productsLikeState={productsLikeState}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            addProductsToCart={addProductsToCart}
                            productsLikeState={productsLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                            productsLikeState={productsLikeState}
                        />
                    }
                />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="products" element={<ProductsPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
