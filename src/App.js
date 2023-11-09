import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

import fondoPrincipal from './assets/FondoPrincipal.png';

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${fondoPrincipal})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default App;
