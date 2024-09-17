import Marker from '../components/marker';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import {React, useState} from "react";
const Marklist = () => {
  const params = useParams();
  let [marker, setMarker] = useState(
    [
        {
          color:"white",
          catName: "all",
          select: false
        },
        {
          color:"orange",
          catName: "study",
          select: false
        },
        {
          color:"red",
          catName: "game",
          select: false
        }
      ]
  );
  // <Marker color="white" name = "all" id="1" select=""/>
  // <Marker color="orange" name = "study" id="2"/>
  // <Marker color="red" name = "game" id="3"/>
  for(var i=0;i<marker.length;i++) {
    if(marker[i].catName===params.cat){
      marker[i].select = true;
    }
  }
  let idx=0;
  return(
    <>
      {
        marker.map((data)=>{
          console.log(data);
          return(
            <Marker id={idx++} name = {data.catName} select = {data.select} color={data.color}/>
          )
        })
      }
    </>
  )
}
export default Marklist;