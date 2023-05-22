import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = ({setPageNumber, setgender}) => {
    let gender = ["female", "male", "genderless",  "unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"
       data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " 
    data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
 {gender.map((items,index)=> 
    <FilterBTN key={index} items={items} 
    index={index} name="gender"
    setPageNumber={setPageNumber} task={setgender}/>  )}
     </div>
    </div>
  </div>
  )
}

export default Gender
