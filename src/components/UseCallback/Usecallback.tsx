import * as React from "react";
import  { useState, useCallback } from 'react';

;

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(`Button clicked! Count is ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

function ChildComponent({ handleClick }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ParentComponent;
