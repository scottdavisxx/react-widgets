import React from "react";

const Clock = () => {

  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    let interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div> 
      <h2>The local time is:</h2>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;