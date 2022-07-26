import React, { useRef, useState } from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import { Link, useParams } from 'react-router-dom';
import { collection, query, where, getFirestore, addDoc, serverTimestamp, orderBy } from "firebase/firestore";


const auth = getAuth();

//db conection
function MessagesToEachGame() {
  const {id} = useParams();
  const dummy = useRef();
  const db = getFirestore();
  const messagesRef = collection(db,'messages');

  //&& orderBy("timestamp", "asc") /////// añadir en linea 20 seguido de la condicion where
  const q = query(messagesRef, where("game","==",`${id}`), orderBy('timestamp'));
  const [messages] = useCollectionData  (q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  //message writing
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db,'messages'),{
      uid,
      text: formValue,
      timestamp: serverTimestamp(),
      game: id,
      photoURL
    })
    //scroll down when new message and message button
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (<>
  <div id='body'>
      <div id='app'>
        <main>
    
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    
          <div ref={dummy}></div>
    
        </main>
    
        <form id='form' onSubmit={sendMessage}>
    
          <input id="input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="write your message here" />
    
          <button id='button' type="submit" disabled={!formValue}>Send</button>
    
        </form>
      </div>
  </div>
  </>)
};


//message body
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img id='img' alt='userPhoto' src={photoURL} />
      <p id='p'>{text}</p>
    </div>
  </>)
};


//Chat Button
const ChatButton = () =>{
    const {id} = useParams()
    return(
        <Link to={`/schedule/${id}/game_${id}`}><button id='chat-button' className="btn btn-lg btn-primary">Chat</button></Link>
    )
}



export {  ChatButton, MessagesToEachGame }

