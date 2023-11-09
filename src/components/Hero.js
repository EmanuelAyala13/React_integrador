import React from 'react';
import styled from 'styled-components';
import shenlongImage from '../assets/ShenlongFunkoPop.png';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  color: #fff;

  @media (min-width: 1028px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #ffcc00;
  margin-bottom: 10px;

  @media (min-width: 1028px) {
    margin-bottom: 20px;
    text-align: left;
  }
`;

const ContentWrapper = styled.div`
  text-align: left;
  margin-top: 20px;

  @media (min-width: 1028px) {
    flex: 1;
    margin-top: 0;
    text-align: left;
  }
`;

const ShenlongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShenlongImage = styled.img`
  max-width: 90%;
  height: auto;
  width: 90%;
  max-height: 280px;
  border: 5px solid #ffcc00;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1028px) {
    width: 100%;
    max-height: none;
    margin-top: 0;
  }
`;

const Description = styled.p`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  color: #ffcc00;
  font-size: 1.2em;
  margin: 15px 0;
  line-height: 1.6;
  margin-top: 10px;

  @media (min-width: 1028px) {
    margin-bottom: 20px;
  }
`;

const Price = styled.p`
  color: #ffcc00;
  font-size: 1em;
  margin-bottom: 10px;

  @media (min-width: 1028px) {
    margin-bottom: 0;
  }
`;

const AddToCartButton = styled.button`
  background-color: #ffcc00;
  color: #000;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffd633;
  }

  @media (min-width: 1028px) {
    margin-top: 10px;
  }
`;

const Hero = () => {
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito');
  };

  return (
    <HeroWrapper>
      <ShenlongContainer>
        <ShenlongImage src={shenlongImage} alt="Shenlong Funko Pop" />
      </ShenlongContainer>
      <ContentWrapper>
        <Title>
          Funko de la <span style={{ fontWeight: 'bold', color: '#ffcc00' }}>Semana</span>
        </Title>
        <Description>
          Descubre el Funko Pop de <span style={{ fontWeight: 'bold', color: '#ffcc00' }}>Shenlong Dorado</span>, la joya de nuestra colección. Este Funko destaca por su diseño meticulosamente detallado y su representación única de uno de los personajes más icónicos de Dragon Ball. No pierdas la oportunidad de agregar esta obra maestra a tu colección. ¡Colecciónalos todos!
        </Description>
        <Price>$19.99</Price>
        <AddToCartButton onClick={handleAddToCart}>Agregar al carrito</AddToCartButton>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
