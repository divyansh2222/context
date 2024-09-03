import React, { createContext } from 'react'
import { useState } from 'react';
import { url } from './component/BaseUrl';
export const AppContextProvider= createContext();

function AppContext({children}) {
    
const [loader,setloader]=useState(false)
const [posts,setpost]=useState([])
const [page,setpage]=useState(1)
const [totalPages,settotal]=useState(null)


 async function fetchdata(page=1) {
    setloader(true)
    let Apiurl=`${url}?page=${page}`
  
  
    try {
    const res= await fetch(Apiurl);
    const data= await res.json();
     console.log(data)
    setpage(data.page)
    setpost(data.posts)
    settotal(data.totalPages)
  } catch (error) {
    setpage(1)
    setpost([])
    settotal(null)
  }
  setloader(false)

}


  function handlerpage(page){
    setpage(page);
fetchdata(page);
  }


const value={
    page,setpage,posts,setpost,loader,setloader,totalPages,settotal,fetchdata,handlerpage
  };


return<AppContextProvider.Provider value={value}>
    {children}
</AppContextProvider.Provider>

}

export default AppContext  
