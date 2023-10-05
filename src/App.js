import React, { useState } from "react";
import Searchbar from "./component/Searchbar";
 import searchImage from "./api";
 import Imagelist from "./component/Imagelist";
function App(){
  const[image,setImage]=useState([])
const handleSubmit =async (term)=>{
// console.log("do search with ", term)
const result= await searchImage(term)
setImage(result)
}


  return(
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      <Imagelist image={image}/>
     
    </div>
  )
}
export default App;