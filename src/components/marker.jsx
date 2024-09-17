import '../style/Marker.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Marker = ({select,id,name,color}) =>{

  const navigate = useNavigate();                             // 2
  const goToMarker = () => {                                    // 3
    navigate(`/dashboard/${name}`);
  };
  function selectColor() {
    color = document.getElementById("true").getElementsByTagName("div")[0].style.backgroundColor;
    document.getElementsByClassName("main_node")[0].style.backgroundColor = color;
  }
  function selectMarker(){
    document.getElementById("true").id="false";
    document.getElementsByClassName(id)[0].parentElement.id="true";

    selectColor();
    goToMarker();
  }
  const style = {
    backgroundColor: color
  };
  return (
    <article className={`marker ${name}`} id={`${select===true||select==="true"?"true":"false"}`} onClick={selectMarker} Link to='/'>
      <div className={`${id}`} style={style}>

      </div>
    </article>
  )
}
export default Marker;