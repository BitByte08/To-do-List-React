import { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date());
  useEffect(()=>{
    const time = setInterval(()=>{
      setClock(new Date());
    },1000);
    return (() => clearInterval(time))
  },[]);
  return (
    <h1 className="clock">{clock.toLocaleString()}</h1>
  )
}
export default Clock;