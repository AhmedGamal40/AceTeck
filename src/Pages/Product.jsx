import React from "react";
import Slider from "react-slick";
import { productlists } from "../Data/productlists";
import ProductCard from "../Components/Product/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
      <section className="py-20 bg-gray-600">
        <div className="container">
          <div className="content">
            <Slider {...settings}>
              {productlists.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  images={product.images}
                  price={product.price}
                  discount={product.discount}
                  rating={product.rating}
                  featured={product.featured}
                  color={product.color}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
