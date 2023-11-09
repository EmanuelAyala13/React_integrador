import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const FeaturedProductsWrapper = styled.div`
  text-align: center;
  padding: 50px 20px; 
  background-color: #333;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em; 
  color: #ffcc00; 
  margin-bottom: 20px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturedProducts = () => {
  return (
    <FeaturedProductsWrapper>
      <SectionTitle>Productos Destacados</SectionTitle>
      <ProductsContainer>
        <ProductCard image="GokuSsjBlueFunkoPop.png" name="Goku SSJ Blue" price={19.99} />
        <ProductCard image="TrunksFunkoPop.png" name="Trunks" price={17.99} />
        <ProductCard image="VegetaRedFunkoPop.png" name="Vegeta Red" price={21.99} />
      </ProductsContainer>
    </FeaturedProductsWrapper>
  );
};

export default FeaturedProducts;
