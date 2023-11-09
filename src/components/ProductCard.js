import React from 'react';
import styled from 'styled-components';

import gokuImage from '../assets/GokuSsjBlueFunkoPop.png';
import trunksImage from '../assets/TrunksFunkoPop.png';
import vegetaImage from '../assets/VegetaRedFunkoPop.png';

const ProductCardWrapper = styled.div`
  text-align: center;
  width: 250px;
  margin: 10px;
  margin-bottom: 30px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductTitle = styled.h2`
  color: #ffcc00;
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ProductPrice = styled.p`
  color: #ffcc00;
  font-size: 1em;
  margin: 5px 0;
`;

const AddToCartButton = styled.button`
  background-color: #ffcc00;
  color: #000;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffd633;
  }
`;

const ProductCard = ({ image, name, price }) => {
  let productImage;

  switch (image) {
    case 'GokuSsjBlueFunkoPop.png':
      productImage = gokuImage;
      break;
    case 'TrunksFunkoPop.png':
      productImage = trunksImage;
      break;
    case 'VegetaRedFunkoPop.png':
      productImage = vegetaImage;
      break;
    default:
      productImage = gokuImage;
  }

  const handleAddToCart = () => {
    console.log(`Producto ${name} agregado al carrito`);
  };

  return (
    <ProductCardWrapper>
      <ProductImage src={productImage} alt={name} />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>${price}</ProductPrice>
      <AddToCartButton onClick={handleAddToCart}>Agregar al carrito</AddToCartButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
