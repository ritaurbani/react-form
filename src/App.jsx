import { useState } from 'react'
import blog from "./data/posts"


function App() {
  
  const [posts, setPosts] = useState([])

  //variabile input
  const [postTitle, setPostTitle] = useState("")

  //Form function
  const handlePostForm = (event) => {
    event.preventDefault();
    // intercetta bottone - console.log("submit") 
    // COSE DA FARE????
    //CREO NUOVO POST
    const newPost = {
      id: Date.now(),
      title: postTitle,
    };

    console.log(newPost)
    //CREO COPIA ARRAY AGGIUNGENDO NUOVO POST
    const newArray = [...posts, newPost]

    //AGGIORNO STATO DEL POST
    setPosts(newArray)
    //RESET CAMPO INPUT PER IL TITOLO
    setPostTitle("")
  }

  return (
    <>
    <div className='container'> 
      <h2>Il mio Blog</h2> 
          
   {/* INPUT nuovo post */}
      <section>
      
        <form onSubmit={handlePostForm} >
          <div className='mb-3'>
            <label htmlFor="titolo">Titolo articolo</label>
            <input type="text"
              className='form-control' 
              id='titolo' 
              value={postTitle} 
              onChange={(event) => setPostTitle(event.target.value)}/>
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </section>

        
        <ul>
          {
            posts.map((post, index) => (
              <li key={index}>{post.title}</li>

            ))
          }
        </ul>
      
      {/* controllo per confermare che aggiorna */}
      <p>{postTitle}</p>
    </div>  
    </>
  )
}

export default App
