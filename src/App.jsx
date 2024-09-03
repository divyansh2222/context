

import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContextProvider } from './AppContext'
import Blog from './component/Blog'
import Header from './component/Header'
import "./App.css"
import Pagination from './component/Pagination'
//test

function App() {

  const {fetchdata}=useContext(AppContextProvider)
  useEffect(()=>{
    fetchdata();
  },[]);
  return (
    <div>
      <Header></Header>
      <Blog></Blog>
      <Pagination></Pagination>
      
    </div>
  )
}

export default App
