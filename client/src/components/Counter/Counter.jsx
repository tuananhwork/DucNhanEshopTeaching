<<<<<<< HEAD
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Bạn đã bấm ${count} lần`;
  }, [count]);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm</button>
    </div>
  );
}
=======
import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Re-render');

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
};
>>>>>>> 94a1fc3bddbd827d7d694a26943d98ece28b42f2

export default Counter;
