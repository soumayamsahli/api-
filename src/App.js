
import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';
import UserList from './component/UserList';
function App() {
  const [listofUser, setListOfUser] = useState(null)
  useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((users)=> setListOfUser(users.data))
    .catch((err)=> console.log("error:",err))
  },[])

  
  return (
    <div className="App">
      { 
      listofUser ? <UserList listofUser={listofUser}/> : null    }
    </div>
  );
}

export default App;
