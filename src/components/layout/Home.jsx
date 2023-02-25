import React from 'react'
import Banner from '../banner/Banner'
import Categories from '../Categories/Categories'
import Flash from '../flashdeals/Flash'
import New from '../newarrival/New'
import PreFooter from '../prefooter/PreFooter'
import Promotion from '../promotions/Promotion'
import Services from '../services/Services'
import TopProducts from '../top/TopProducts'

const Home = () => {
  return (
    <>
        <Banner />
        <Promotion />
        <New />
        <Flash />
        <TopProducts />
        <Categories />
        <Services />
        <PreFooter />
    
    </>
  )
}

export default Home