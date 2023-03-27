import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)


  const saveCart = (myCart) => {
    localStorage.setItem('cart', myCart)
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }

    setCart(newCart)
    setCart(newCart)

  }

  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
