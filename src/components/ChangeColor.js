import React from "react";

const ChangeColor = () => {

  const [color, setColor] = React.useState('black');

  const [text, setText] = React.useState('');

  return (
    <div>
      <h2 style={{color}}>{color}</h2>
      <input 
        type="text" 
        placeholder="color" 
        value={text} 
        onChange={event => setText(event.target.value)}
      />
      <button onClick={() => setColor(text)}>Set Color</button>
    </div>
  )
}

export default ChangeColor;