import { Link, useParams } from 'react-router-dom'
import {storage, PostData} from '../utilities/firebase'
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { serverTimestamp } from '@firebase/database';
// import { serverTimestamp, set } from '@firebase/database';
// import { AiFillCamera } from 'react-icons/fa'
// import { FaBeer } from 'react-icons/fa';
// import { useList } from "react-firebase-hooks"
// import { https://www.youtube.com/watch?v=pJ8LykeBDo4&t=267s } from "youtube"

// const PostData = (url, displayName ) =>{
//     set(ref(db, 'messages/pictures/game-1/picture-2'),{
//       author: "aaaaa",
//       timestamp: serverTimestamp(),
//       url:"aaaaaa"
//   })
// }


function PhotoGallery() {
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    
   
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL)
          PostData(url, serverTimestamp());
        });
      }
      
    );
  };
  
  console.log(url, 'holaaaaaaaaaaaa')
  


  return (

    <div className="App">
      <i className="bi bi-camera"></i>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
          <button type="submit">Upload to firebase</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
      <img alt="img-posted" src={url}></img>
    </div>

  );
}





const PhotoButton = () =>{
    const {id} = useParams()
    return(
        <Link to={`/schedule/${id}/game_${id}/photo gallery${id}/`}><button id='chat-button' className="btn btn-lg btn-primary">Photo Gallery</button></Link>
    )
}
export {PhotoGallery, PhotoButton }  