import React from 'react'
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom';

const Cards = ({results ,page}) => {
    let display;
//   console.log(results)
 if(results){
    display= results.map((currElm)=> {
        let {id, name,location, image,status} = currElm;
        return (
        <Link style={{textDecoration:"none"}} to={`${page}${id}`} 
         className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark" 
          key={id} > 
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="..." className={`${styles.img} img-fluid `} />
            <div className="content" style={{padding:10}}>
             <div className="fs-4 fw-bold mb-3"> {name}</div>
              <div className="">
                <div className="fs-6">last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
           </div>
          </div> 
              {(()=>{
                if(status === "Alive"){
                    return   <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                } else if(status === "Dead"){
                  return    <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                }else{
                  return <div className={`${styles.badge} badge bg-warning position-absolute`}>{status}</div>
                 }
               })()}       
        </Link>   
           
        )
    })
        }else{
            display = 'No characters found'
        }
        
      return(
        <>
         {display}
        </>
      )
  }

export default Cards
