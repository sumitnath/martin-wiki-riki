import React,{useEffect, useState} from 'react'
import Cards from '../cards/Cards';
import InputGroup from '../Filters/category/InputGroup';

const Episodes = () => {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([])
    const [results,setResult] = useState([])
    let api = `https://rickandmortyapi.com/api/episode/${id}`
    
    let {name,air_date,episode} = info;
    useEffect(()=>{
        (async ()=>{
       let res = await fetch(api);
       let data = await res.json()
       setInfo(data);
        let a = await Promise.all(
        data.characters.map((currElm)=>{
            return(
                fetch(currElm).then((res)=>res.json())
            )
        })
        )
        setResult(a)
        })()
    },[api])
  return (
    <div className='container'>
      <div className="row mb-4">
      <h1 className="text-center mb-3">Episode:{" "}
      <span className='text-primary'>{ name === "" ? "Unknown" : name} 
      </span></h1> 
      <h5 className="text-center">Air Date {air_date === ""? "Unknown" : air_date},
       Episode No:{' '}{episode}</h5>
      </div>
     <div className="row">
         <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">
          Pick Episodes
          </h4>
          <InputGroup setId={setId} total={51} name="Episode"/>
         </div>
         <div className="col-lg-8 col-12">
         <div className="row">
         <Cards page="/episodes/" results={results}/>
         </div>
         </div>
         </div>    
     </div>   
  )
}
export default Episodes
