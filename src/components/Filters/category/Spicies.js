import React from 'react'
import FilterBTN from '../FilterBTN'
const Spicies = ({setspecies, setPageNumber}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
       data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Spicies
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"
     data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      {species.map((items,index)=> 
        <FilterBTN key ={index} name="species" index={index} items={items}
       task={setspecies} setPageNumber={setPageNumber}/>)}
      </div>
    </div>
  </div>
  )
}

export default Spicies
