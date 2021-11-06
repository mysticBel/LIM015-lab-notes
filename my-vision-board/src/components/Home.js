import React from 'react';

import firebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';
import {  Container, Button } from 'react-bootstrap';

import  AddPost  from './AddPost.js';
import  AllPosts  from './AllPosts.js';


//initializing: 
const auth = getAuth(firebaseApp);

const Home = () => {

  // definying fake data :
 const fakeData = [
   { id:1, title: "title1" , body:"this is  body 1"},
   { id:2, title: "title2" , body:"this is  body 2"},
   { id:3, title: "title3" , body:"this is  body 4"}
  ];

    return <Container>
        <h4> Hello user! </h4>
        <Button onClick={() => signOut(auth)}>
          SignOut
        </Button>

        <hr />
        <AddPost />
        <AllPosts arrayPosts={fakeData} />

    </Container>
    
}

export default Home;