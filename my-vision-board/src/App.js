import React , { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';

function App() {
   // creating global user 
   const [userGlobal, setUserGlobal] = useState(null);


  return <>{ userGlobal ? <Home /> : <Login />} </>
}

export default App;
