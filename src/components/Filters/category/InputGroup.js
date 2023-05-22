import React from 'react'

const InputGroup = ({total,name,setId}) => {
  const totalEpisodeNo = [...Array(total).keys()]
  return (
    <div className="input-group mb-3">
       <select className="form-select" id={name}
       onChange={(e)=>setId(e.target.value)}
       >
      <option selected value="1">Choose...</option>
      {totalEpisodeNo.map((curElm)=>
        <option key={curElm + 1}  value={curElm + 1}>{name} - {curElm+1}</option>
      )}


    </select>
  </div>
  )
}

export default InputGroup
