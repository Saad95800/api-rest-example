import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};

function App() {
  const [posts, setPosts] = useState([])
  const [spaces, setSpaces] = useState([])

  useEffect(()=>{

        // axios({
        //   method: 'get',
        //   url: 'https://firestore.googleapis.com/v1/projects/'+firebaseConfig.projectId+'/databases/(default)/documents/space?key='+firebaseConfig.apiKey,
        //   responseType: 'json'
        // })
        //   .then(function (response) {
        //     console.log(response.data.documents)
        //     setSpaces(response.data.documents)
        //   })
        //   .catch((error)=>{
        //     console.log(error)
        //   });
    
        axios({
          method: 'get',
          url: 'https:freefakeapi.io/api/posts',
          responseType: 'json'
        })
          .then(function (response) {
            console.log(response.data)
            setPosts(response.data)
          })
          .catch((error)=>{
            console.log(error)
          });
  }, [])

  return (
    <>
     <div className="container mt-5"> {/* Ajout d'un conteneur Bootstrap */}
       <h1 className="mb-4">Articles</h1>
       <div className="row"> {/* Ajout d'une rangée Bootstrap */}
         {posts.map((post, index)=>{
           return (
             <div key={index} className="col-md-4 mb-4"> {/* Chaque article prend 1/3 de la largeur de la page */}
               <div className="card"> {/* Utilisation d'une carte Bootstrap */}
                 <img src={post.picture} alt={post.title} className="card-img-top" /> {/* Image en haut de la carte */}
                 <div className="card-body">
                   <h3 className="card-title">{post.title}</h3>
                   <p className="card-text">{post.content}</p>
                 </div>
               </div>
             </div>
           )
         })}
       </div>
     </div>
    </>
  )
}

export default App
