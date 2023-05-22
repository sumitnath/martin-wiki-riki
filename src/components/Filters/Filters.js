import React from 'react'
import Gender from './category/Gender'
import Spicies from './category/Spicies'
import Status from './category/Status'

const Filters = ({setStatus, setgender,setspecies, setPageNumber}) => {
  const clear =()=>{
    setStatus('');
     setgender('');
     setspecies('');
      setPageNumber('');
      window.location.reload(false)
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fs-4 fw-bold mb-2">
      Filter </div>

      <div  onClick={clear}    style={{cursor:"pointer"}} 
      className="text-center text-primary text-decoration-underline">Clear Filters</div>
    
      <div className="accordion mb-4" id="accordionExample">
      <Status setStatus={setStatus} setPageNumber={setPageNumber} />
      <Spicies  setspecies={setspecies} setPageNumber={setPageNumber} />
      <Gender setgender={setgender} setPageNumber={setPageNumber} />
         
    </div>
      </div>
  )
}

export default Filters
