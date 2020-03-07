import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(window.pdp.cart.count);

  useEffect(() => {
    window.addEventListener('cartChange', e => {
      setCount(window.pdp.cart.count);
    });
  }, []);

  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;
