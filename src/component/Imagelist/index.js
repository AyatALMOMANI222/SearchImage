import React from "react";
// import searchImage from "./api";
import Imageshow from "../Imageshow/index";

function Imagelist({image}) {
  const renderedImage =image.map((image)=>{
    return <Imageshow image={image}/>
  })
    return(
        <div>
{renderedImage}
        </div>
    )
}
export default Imagelist;