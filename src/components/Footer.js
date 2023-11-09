import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 10%;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightText>© 2023 Generacion-Z Funkos. Todos los derechos reservados.</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
