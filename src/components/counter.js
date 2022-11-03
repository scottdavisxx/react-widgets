import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
