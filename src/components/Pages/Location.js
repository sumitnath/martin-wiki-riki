import React,{useEffect, useState} from 'react'
import Cards from '../cards/Cards';
import InputGroup from '../Filters/category/InputGroup';

const Location = () => {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([])
    const [results,setResult] = useState([])
    let api = `https://rickandmortyapi.com/api/location/${id}`
    
    let {name,type,dimension} = info;
    useEffect(()=>{
        (async ()=>{
       let res = await fetch(api);
       let data = await res.json()
       setInfo(data);
        let a = await Promise.all(
        data.residents.map((currElm)=>{
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
      <h1 className="text-center mb-2">Location:{" "}
      <span className='text-primary'>{ name === "" ? "Unknown" : name} 
      </span></h1> 
      <h5 className="text-center"> Dimension: {' '}{dimension}</h5>
      <h6 className="text-center">Type: {type === ""? "Unknown" : type}</h6>
      </div>
     <div className="row">
         <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">
          Pick Location
          </h4>
          <InputGroup setId={setId} total={126} name="Location"/>
         </div>
         <div className="col-lg-8 col-12">
         <div className="row">
         <Cards page="/location/" results={results}/>
         </div>
         </div>
         </div>    
     </div>   
  )
}
export default Location
