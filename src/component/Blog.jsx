import React, { useContext } from 'react'
import { AppContextProvider } from '../AppContext'
import Spinner from './Spinner'


function Blog() {
    const{posts,loader}=useContext(AppContextProvider)
  
  return (
    <div>{
         loader ? (<Spinner></Spinner>):
         
         (
            
            posts.length===0 ?
           ( <div>not found</div>):
            (posts.map((post)=>{
               return <div key={post.id} className='container'>
                <h3>{post.title}</h3>
                <p>By <span className='author'> {post.author}</span> at <span className='category'> {post.category}</span></p>
                <p  className='date'> Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>{
                    post.tags.map((tag,index)=>{
                        return <span className='tags' key={index}>  #{`${tag}`}  </span>
                    })
                    }
                 </div>
                
                </div> 
              
               
               
                 

            }))

         )
        
        }
      
    </div>
  )
}

export default Blog
