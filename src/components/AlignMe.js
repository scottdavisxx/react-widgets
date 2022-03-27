import React from "react";

const AlignMe = () => {
  const [align, setAlign] = React.useState('center');

  return(
    <div>
      <h2 style={{textAlign:`${align}`}}>Align Me</h2>
      <button onClick={() => setAlign('left')}>Left</button>
      <button onClick={() => setAlign('center')}>Center</button>
      <button onClick={() => setAlign('right')}>Right</button>
    </div>
  )
}

export default AlignMe;