import React , { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';

import firebaseApp from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

//initializing: 
const auth = getAuth(firebaseApp);


function App() {
   // creating global user 
   const [userGlobal, setUserGlobal] = useState(null);

   onAuthStateChanged(auth, userFirebase =>{
     if(userFirebase){
       // in case the user has signed in already:
          setUserGlobal(userFirebase);
     } else{
       // in case the user has not signed in yet
          setUserGlobal(null);
     }
   })
  return <>{ userGlobal ? <Home /> : <Login />} </>
}

export default App;
