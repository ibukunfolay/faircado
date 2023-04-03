import React, { useContext } from 'react';
import Header from './components/Header';
import { products } from './data';
import Card from './components/Card';
import Profile from './components/Profile';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isHome } = useContext(AuthContext);

  return (
    <>
      <Header />
      {isHome ? (
        <div className="grid mx-auto grid-cols-2 gap-x-4 gap-y-4 px-4 pt-[7em] pb-[2em]">
          {products.map((product, i) => (
            <Card
              key={i}
              name={product.name}
              price={product.price}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default App;
