import React, { useState } from 'react';

function App() {
  const addToCart = () => window.pdp.cart.addToCart();
  function setDog(dog) {
    const dogs = {
      'Dog 1': 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
      'Dog 2': 'https://images.dog.ceo/breeds/basenji/n02110806_1826.jpg',
    };
    window.pdp.product.setProduct(dog, dogs[dog]);
  };
  return (
    <div className="App">
      <button onClick={() => setDog('Dog 1')}>Dog 1</button>
      <button onClick={() => setDog('Dog 2')}>Dog 2</button>
      <button onClick={addToCart}>Adopt It!</button>
    </div>
  );
}

export default App;
