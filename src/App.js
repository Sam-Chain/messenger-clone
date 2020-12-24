import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';
import FormControl from '@material-ui/core/FormControl';
import { Button, IconButton, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [ username, setUsername ] = useState('');
  const [ input, setInput ] = useState('');
  const [ messages, setMessage ] = useState([]);

  const sendMessage = event=>{
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setMessage([ ...messages, {username: username, message: input} ])

    setInput('')
  }

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  },[])

  useEffect(() => {
    // const name = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'))
  }, [])

  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
      <h2>Hello, {username}</h2>

      {/* <div className="messages">
        {messages.map((message) =>  <Message username={username} message={message} /> )}
      </div> */}

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input 
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={e=>setInput(e.target.value)}
            type="text"
          />
          <IconButton 
            className="app__iconButton"
            color="primary"
            onClick={sendMessage} 
            type="submit" 

          >
              {input ? <SendIcon  fontSize="large" /> : <ThumbUpAltIcon fontSize="large"/>}
          </IconButton>
        </FormControl>
      </form>


      <FlipMove>
       {messages.map(({id, message}) =>  <Message key={id} username={username} message={message} /> )}
      </FlipMove>



    </div>
  );
}

export default App;
