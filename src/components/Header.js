import React from 'react';
import styled from 'styled-components';
import carritoComprasImage from '../assets/CarritoCompras.png';

const HeaderWrapper = styled.header`
  position: relative;
  text-align: center;
  padding: 20px;
  background-color: rgba(51, 51, 51, 0.8); 
  color: #fff;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const CarritoComprasIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 0px;
  width: 30px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Generacion Z</Title>
      <CarritoComprasIcon src={carritoComprasImage} alt="Carrito de Compras" />
      <Navbar>
        <a href="#home">Inicio</a>
        <a href="#contacto">Contacto</a>
        <a href="#nosotros">Nosotros</a>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
