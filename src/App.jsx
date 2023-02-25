import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/layout/Home"
import Cart from "./components/cart/Cart"
import FavoriteProduct from "./components/favorites/FavoriteProduct"
import ScrollToTop from './components/scroll/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<FavoriteProduct />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
