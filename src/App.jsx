import { useState } from 'react'
import blog from "./data/posts"


function App() {
  
  const [posts, setPosts] = useState([])

  return (
    <>
    <div className='container'>
      <h2>Il mio Blog</h2>




      <section>
        <h3>Insert title</h3>
        <form action="">
          <div className='mb-3'>
            <label htmlFor="">Titolo articolo</label>
            <input type="text" />
          </div>
        
        </form>
      </section>
    </div>  
    </>
  )
}

export default App
