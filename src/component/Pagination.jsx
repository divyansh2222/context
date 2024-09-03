import React, { useContext } from 'react'
import { AppContextProvider } from '../AppContext'

function Pagination() {
    const{page,handlerpage,totalPages }=useContext(AppContextProvider)
  return (
    <div className='pagination'>
      <div>

      {
        page > 1 && 
          (<button className='button' onClick={()=>{handlerpage(page-1)}}>Previous</button>)
        
       }
       {
        page <totalPages&&
      (  <button className='button' onClick={()=>{handlerpage(page+1)}}>Next</button>)
       }
        
      </div>
      <p>
        page  {page}  of {totalPages}
      </p>
      
      
    </div>
  )
}

export default Pagination
