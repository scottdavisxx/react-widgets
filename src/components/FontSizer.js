import React from "react";

const FontSizer = () => {
  const [size, setSize] = React.useState(20)


  return (
    <div>
      <button onClick={() => setSize(size - 5)}>Decrease</button>
      <button onClick={() => setSize(size + 5)}>Increase</button>
      <p style={{fontSize: `${size}px`}}>{size}px</p>

    </div>
  )
}

export default FontSizer;