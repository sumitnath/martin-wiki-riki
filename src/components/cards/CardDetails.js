import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from './Cards.module.scss'


const CardDetails = () => {
    let{id} = useParams();
    const API = `https://rickandmortyapi.com/api/character/${id}`
    const [fetchData, updateFetchData]= useState([]);
 let{name,status,type,origin,location,created,image,gender,species} =fetchData
    useEffect(()=>{
        (async function(){
         let res = await fetch(API)
          let data = await res.json();
           updateFetchData(data);
         })()
         },[API])
 console.log(fetchData)

  return (
    <div className='container d-flex justify-content-center'>
    <div className="d-flex flex-column gap-2">
    <h1 className="text-center">{name}</h1>
    <img src={image} alt={id} className="img-fluid" />
    {(()=>{
        if(status === "Alive"){
            return   <div className={`${styles.badge} badge bg-success fs-5`}>{status}</div>
        } else if(status === "Dead"){
          return    <div className={`${styles.badge} badge bg-danger fs-5`}>{status}</div>
        }else{
          return <div className={`${styles.badge} badge bg-warning fs-5`}>{status}</div>
         }
       })()} 
       <div className="content">
       <div className="">
       <span className="fw-bold">Gender :</span> {gender}
       </div>
       <div className="">
       <span className="fw-bold">Spicies :</span> {species}
       </div>
       <div className="">
       <span className="fw-bold">Type :</span> {type === '' ? "Unknown": type}
       </div>
       <div className="">
       <span className="fw-bold">Location :</span> {location?.name}
       </div>
       <div className="">
       <span className="fw-bold">Origin :</span> {origin?.name}
       </div>
       <div className="">
       <span className="fw-bold">Created at :</span> {created}
       </div>
       </div>
    </div>
    </div>
  )
}

export default CardDetails
