import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { addToCart } from "../../utils/fakeDB";

const Shop = () => {
  const productsData = useLoaderData();
  const handleAddToCart = (id) => {
    console.log(id);
    addToCart(id);
  };

  return (
    <div className="product-container px-16 py-10">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          handleAddToCart={handleAddToCart}
          product={product}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
