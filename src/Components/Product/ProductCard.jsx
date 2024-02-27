import React, { useState, Fragment } from "react";
import { IoMdHeart } from "react-icons/io";
import ProductItems from "./ProductItems";

export default function ProductCard({
  id,
  title,
  description,
  images,
  discount,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="product card">
        <div className="images h-96">
          {images.map((cover, index) => (
            <img
              key={index}
              src={cover.image} 
              alt={`Product ${id}`}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="flex justify-between w-full p-5 absolute top-0 left-0">
            {discount && <button className="discount-btn bg-lime-500 rounded-sm p-1">{discount}%</button>}
          </div>
          <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={openModal}
              className="quick-view-btn product-btn primary-btn"
            >
              Quick View
            </button>
            <button className="love-cart-btn product-btn primary-btn">
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-white pt-6">
          <h1 className="text-lg font-normal text-primary-gray mb-4">
            {title}
          </h1>
        </div>
      </div>

      <ProductItems
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        images={images}
        id={id}
        discount={discount}
        title={title}
        description={description}
      />
    </>
  );
}
