import { useEffect, useState } from "react";

const Clack = () => {
  const [clock, setClock] = useState(0);
  useEffect(()=>{
    const time = setInterval(()=>{
      setClock(new Date());
    },1000);
    return (() => clearInterval(time))
  },[]);
  return (
    <h1 className="clock">{clock.toLocaleString().slice(11, 22)}</h1>
  )
}
export default Clack;