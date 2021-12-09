import {useState} from "react"
import HogTile from "./HogTile";

function HogContainer({hogs}){
  const [filterByGrease, setFilterByGrease] = useState(false);
  const [displayHogs, setDisplayHogs] = useState(hogs);
  const [sortNames, setSortNames] = useState(false)
  
  function handleFilter(e){
    setFilterByGrease(!filterByGrease)
    
    if(e.target.checked){
      const hogsFiltered = displayHogs.filter(hog=>{
        return hog.greased === true;
      })
      setDisplayHogs(hogsFiltered);
    }else
    setDisplayHogs(hogs)
  }
  
  function handleSort(e){
    setSortNames(!sortNames)

    if(e.target.checked){
      const hogsSorted = displayHogs.slice().sort( (a,b) =>{
        if(a.name < b.name)return -1
        if(a.name > b.name)return 1
        return 0
      })
      setDisplayHogs(hogsSorted);
    }else
      setDisplayHogs(hogs)
    }


  return(
    <div>
      <div>Only greased<input type="checkbox" id="filter" onClick={handleFilter} ></input> 
      </div>
      <div>Sort by name<input onClick={handleSort} type="checkbox" id="sort"></input> 
      </div>
    <div>{displayHogs.map((hog, index)=><HogTile key={index} hog={hog}/>)}</div>
    </div>
  )
}

export default HogContainer;