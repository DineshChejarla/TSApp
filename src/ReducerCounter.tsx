import React, { useReducer } from 'react';
import './App.css';

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

const ReducerCounter: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter-card">
      <h2>useReducer Counter</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerCounter;
