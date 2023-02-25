import React from 'react'
import flashDeals from '../../data/flashdeals'
import Slider from 'react-slick'

import Product from './Product'


const FlashSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    const renderProduct = flashDeals.map(item =>
        <Product key={item.id} id={item.id} name={item.name} src={item.src} price={item.price} off={item.off} />)

    return (
        <div>
            <Slider {...settings}>
                {renderProduct}
            </Slider>
        </div>
    )
}

export default FlashSlider