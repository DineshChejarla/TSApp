import React, { useState } from 'react';
import './App.css';

const StateCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-card">
      <h2>useState Counter</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default StateCounter;
