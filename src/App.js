import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap"
import Filters from './components/Filters/Filters';
import Cards from './components/cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Episodes from './components/Pages/Episodes';
import Location from './components/Pages/Location';
import CardDetails from './components/cards/CardDetails';

const App = ()=>{
  return(
 
<BrowserRouter>
<div className='App'>
<NavBar/>
</div>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/:id' element={<CardDetails/>}/>
<Route path='location' element={<Location/>}/>
<Route path='location/:id' element={<CardDetails/>}/>
<Route path='episodes' element={<Episodes/>}/>
<Route path='episodes/:id' element={<CardDetails/>}/>
</Routes>
</BrowserRouter>

  )
}

function Home() {
  const [pageNumber, setPageNumber] =useState(1)
  const [fetchData, updateFetchData]= useState([])
  const [search , setSearch] = useState('')
  const [status,setStatus ] =useState('')
  const [gender,setgender] =useState('')
  const [species,setspecies] =useState('')

  const {info ,results} = fetchData;
 
const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(()=>{
 (async function(){
  let res = await fetch(API)
   let data = await res.json();
    updateFetchData(data);
  })()
  },[API])

    return (
    <div className='App'>
   <h1 className="text-center mb-3">Characters</h1>
    <Search 
    setPageNumber={setPageNumber} setSearch={setSearch}/>
    <div className="container">
      <div className="row">
              
     <Filters setStatus={setStatus}
      setPageNumber={setPageNumber}
       setgender={setgender}
       setspecies={setspecies}/>
              
        <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/" results= {results}/>    
            </div>
        </div>
      </div>
    </div>
    <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
</div>
  
  );
}

export default App;
