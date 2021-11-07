import React , { useState, useEffect } from 'react';
import firebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc , setDoc } from 'firebase/firestore';
import {  Container, Button, Image } from 'react-bootstrap';

import  AddPost  from './AddPost.js';
import  AllPosts  from './AllPosts.js';


//initializing: 
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({emailUser, nameUser, photoUser}) => {
  console.log('emailUser')

  const [arrayPosts, setArrayPosts] = useState(null);

  // definying fake data :
 const fakeData = [
   { id:1, title: "title1" , body:"this is  body 1"},
   { id:2, title: "title2" , body:"this is  body 2"},
   { id:3, title: "title3" , body:"this is  body 4"}
  ];

  // creating async await to search doc
  async function searchDocOrCreateDoc (idDoc){
    // create ref to document (doc(firestore, path with string template))
       const docRef = doc(firestore, `myVisionBoard_users/${idDoc}`);
    // search document , await to wait for results 
       const docSearch = await getDoc(docRef);
    // document exists?  -true
       if (docSearch.exists()){
          // if so then -method data shows the data in doc
          const dataDoc = docSearch.data();
          return dataDoc.posts;

       } else {
          // if not then -false
          await setDoc(docRef,{ posts: [...fakeData] });
          const docSearch = await getDoc(docRef);
          const dataDoc = docSearch.data();
          return dataDoc.posts;
       }
       

   

    
  }
  
  // async. function, obtain posts and save them in a state (line 18)
   useEffect(()=>{
      async function fetchPosts(){
        const postsFetched = await searchDocOrCreateDoc(emailUser);
      setArrayPosts(postsFetched);  
      }
      fetchPosts();
   } , [])
  
    return <Container>
        <h4> Hello {nameUser} </h4>
        <Image src={ photoUser } alt="photoUser"/>
        <Button onClick={() => signOut(auth)}>
          SignOut
        </Button>

        <hr />
        <AddPost />
        { arrayPosts ? <AllPosts arrayPosts={ arrayPosts } setArrayPosts={ setArrayPosts} emailUser={ emailUser }/> : null }

    </Container>
    
}

export default Home;