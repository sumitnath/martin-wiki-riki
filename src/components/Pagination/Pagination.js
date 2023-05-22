import React,{useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
// const Pagination = ({pageNumber,setPageNumber}) => {
//     // const prev =()=>{ 
//     //   if(pageNumber === 1){
//     //     return
//     //   }
//     //   setPageNumber((x)=> x-1)};
//     // const next = ()=>{setPageNumber((x)=> x+1)};
//   // return (
//   //   <div className='container
//   //    d-flex justify-content-center gap-5 my-5'>
//   //     <button onClick={prev}
//   //      className="btn btn-primary">Prev</button>
//   //     <button onClick={next} 
//   //     className="btn btn-primary">Next</button>
//   //   </div>
//   // )
// }
const Pagination = ({info,setPageNumber,pageNumber}) => {
  let [innerWidth,setWidth] = useState(window.innerWidth);
  //console.log(innerWidth)
  let updateDimension = ()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",updateDimension);
    return ()=> window.removeEventListener("resize",updateDimension)
  },[])
 
  return (
 <>
<style jsx>
{` @media(max-width:786px){
    .prev,
    .next{
    display:none;
    } 
    .pagination{
      font-size:10px;
    }
  }
  `
}
</style>
    <ReactPaginate pageCount	={info?.pages}
    className='pagination justify-content-center gap-4 my-4 text-justify text-align-center'
    forcePage ={pageNumber === 1 ? 0  : pageNumber -1}
    previousLabel= "Prev "
    nextLabel="Next"
    pageClassName="page-item"
    previousClassName="btn btn-outline-info prev"
    onPageChange={(data)=>setPageNumber(data.selected + 1)}
    pageLinkClassName="page-link"
    nextClassName="btn btn-outline-info next"
    marginPagesDisplayed={innerWidth < 586 ? 1:3}
    pageRangeDisplayed={innerWidth < 586 ? 1:3}
    activeLinkClassName="page-item active"
  />
  </>
   )

}
  export default Pagination
