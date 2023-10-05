import React from "react";
function Imageshow({image}) {
    return(
        <div>
<img alt={image.alt_description} src={image.urls.small}/>
        </div>
    )
}
export default Imageshow;