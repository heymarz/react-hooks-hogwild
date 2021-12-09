import {useState} from "react";
import HogDetails from "./HogDetails";

function HogTile({hog}){
  const [visibleDetails, setVisibleDetails]= useState("false")

  function handleClick(){
    setVisibleDetails(!visibleDetails)
  }

  return(
    <div>
      <h1 
      className="ui eight wide column" 
      id={hog.name} 
      key={hog.name}
      >
        {hog.name}
      </h1>
      <img onClick={handleClick} src={hog.image} alt="Piggies" />
      {visibleDetails ? <div><HogDetails hog={hog}/></div> : ""}
    </div>

  )
}

export default HogTile;