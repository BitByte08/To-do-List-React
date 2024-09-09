import '../style/Block.css'
import React from "react";
const Block = ({name,children}) =>{
  return (
    <article className={`${name}`} style={{gridArea:`${name}`}}>
      {children}
    </article>
  );
}
export default Block;