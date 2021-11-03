import React from 'react';

import firebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';
import {  Container, Button } from 'react-bootstrap';

//initializing: 
const auth = getAuth(firebaseApp);

const Home = () => {
    return <Container>
        <h4> Hello user! </h4>
        <Button onClick={() => signOut(auth)}>
          SignOut
        </Button>
    </Container>
    
}

export default Home;