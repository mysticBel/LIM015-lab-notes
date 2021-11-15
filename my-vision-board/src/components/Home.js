import React , { useState, useEffect } from 'react';
import firebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc , setDoc } from 'firebase/firestore';
import {  Container, Button, Image, Col , Row} from 'react-bootstrap';

// import  AddPost  from './AddPost.js';
import {AllPosts, AddPost }  from './AllPosts.js';


//initializing: 
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({emailUser, nameUser, photoUser}) => {
  console.log('emailUser')

  const [arrayPosts, setArrayPosts] = useState(null);

  // definying fake data :
 const fakeData = [
   { id:1, title: "✨ Welcome ✨ " , body:"Welcome to Memories , keep aware of your life story and growth with this app, eveyday is a new adventure  !! "},
   { id:2, title: " 💙 Don't be afraid to be yourself 🦋" , body:"✌️ Bring the joy, Feel the Love & Be grateful ...💛 "}
  ];

  // creating async await to search doc
  async function searchDocOrCreateDoc (idDoc){
    // create ref to document (doc(firestore, path with string template))
       const docRef = doc(firestore, `memories_users/${idDoc}`);
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
       <Row  >
       <Col sm={3} className="home__leftColumn"> 
        <Image className="home__userPhoto" src={ photoUser ? photoUser: "https://raw.githubusercontent.com/mysticBel/LIM015-lab-notes/main/my-vision-board/src/assets/avatarDefault.jpg"} roundedCircle alt="photoUser"/>
        <h4 className="home__user">{nameUser? nameUser : emailUser} </h4>
        <Button className="signout" variant="outline-secondary" onClick={() => signOut(auth)}>
          Sign Out
        </Button>
        </Col>

        <Col sm={9} className="home__rightColumn">  
        <AddPost arrayPosts={ arrayPosts } setArrayPosts={ setArrayPosts} emailUser={ emailUser } />
        { arrayPosts ? <AllPosts arrayPosts={ arrayPosts } setArrayPosts={ setArrayPosts} emailUser={ emailUser }/> : null }
        </Col>
        </Row>
    </Container>
    
}

export default Home;