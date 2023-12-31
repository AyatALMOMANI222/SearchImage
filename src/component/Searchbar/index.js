import React, { useState } from "react";
function Searchbar({onSubmit}) {
const [term,setTerm] =useState('')

    const handleformSubmit=(event)=>{
        event.preventDefault()
        onSubmit(term);
    }
        const handleChange =(event)=>{
setTerm(event.target.value)
        }
  
    return(
        <div>
            <form  onSubmit={handleformSubmit}>
                <input className="search_bar" value={term} onChange={handleChange}/>
            </form>

 </div>
    )
}
export default Searchbar;