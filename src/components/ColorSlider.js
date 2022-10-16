import React from "react";

const ColorSlider = () => {
  const [red, setRed] = React.useState(0)
  const [green, setGreen] = React.useState(0)
  const [blue, setBlue] = React.useState(0)


  return (
    <div>
      <div className="center" 
        style={{height:100, 
                width: 200, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
      >
        <label for="red">Red</label>
        <input 
          type="range" 
          name="red"
          min="0" 
          max="255" 
          value={red}
          onChange={e => setRed(e.target.value)}
        />
        <label for="green">Green</label>
        <input 
          type="range" 
          name="green"
          min="0" 
          max="255" 
          value={green}
          onChange={e => setGreen(e.target.value)}
        />
        <label for="blue">Blue</label>
        <input 
          type="range" 
          name="blue"
          min="0" 
          max="255" 
          value={blue}
          onChange={e => setBlue(e.target.value)}
        />
      </div>
    </div>
  )
}


export default ColorSlider;