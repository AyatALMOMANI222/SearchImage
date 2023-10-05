import axios from "axios";
const searchImage=async(term)=>{
const response =await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization:'Client-ID Oi1WFLMa91iWGacMPngzDzNX_NwJAhrr4UH8JqHh46Y'},
     params:{query:term,
},
});
// console.log(response.data.results);
return response.data.results;
}
export default searchImage;