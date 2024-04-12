import "./shop.css";
import React from 'react';

export const Shop = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>Aeden's Shop</h1>
        </div>
  
        <div className="products">

          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
          
        </div>
      </div>
    );
  };