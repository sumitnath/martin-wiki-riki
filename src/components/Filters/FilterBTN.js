import React from 'react'

const FilterBTN = ({name,index,items, task, setPageNumber,setgender}) => {
    return (
    <div>
    <style jsx>
     {`
     .x:checked + label {
        background-color: #0b5ed7;
        color:white
     }
      
     input[type="radio"]{
        display:none;
     }`}
    </style>
    <div className="form-check">
    <input className="form-check-input x" type="radio" 
     onClick ={()=>{
        setPageNumber(1);
        task(items);        
       }
    }
    name={name} 
    id={`${name} - ${index}`}/>
    <label className="btn btn-outline-primary"
     htmlFor={`${name} - ${index}`}>{items}</label>
  </div>
 
    </div>
  )
}

export default FilterBTN
