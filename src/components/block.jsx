import React from "react";
const Block = ({color,name,children}) =>{
  let style = {
    backgroundColor: color,
    gridArea:name,
    zIndex: 999,
    margin: "20px",
    borderRadius: "20px"
  };
  return (
    <article className={`${name}`} style={style}>
      {children}
    </article>
  );
}
export default Block;