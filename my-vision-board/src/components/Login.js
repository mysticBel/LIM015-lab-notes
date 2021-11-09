import React, { useState } from "react";
import { Stack, Container, Form, Button, Image } from "react-bootstrap";
import firebaseApp from '../credentials';
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // creating a state that checks if the user is logging or not(boolean)
  const [isRegistering, setIsRegistering] = useState(false);

  // we're gonna interact with Firebase asynchronously :
  async function  submitHandler(e){
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    // console.log(email, password);
    if (isRegistering){
       const user = await createUserWithEmailAndPassword(auth,email, password); //promise
       console.log(user);
    } else {
      signInWithEmailAndPassword(auth,email,password);
    }
   
  }

  return (
    <Container fluid className="mt-5 ">
      <Stack gap={2} className=" login__stack col-md-3 mx-auto">
        
        <h1 className="login__title">My Vision Board </h1>
        <h3 className="login__subtitle" > Dream, Believe, Plan, Do ! </h3>
        <Image className="login__logo" src="https://www.seekpng.com/png/full/17-171385_this-free-icons-png-design-of-cute-elephant.png" />
          <h2 className="login__register">{isRegistering ? 'Register': 'Login' }  </h2> 
          <Button className="login__Google"   size="md" type="submit"
           onClick={ () =>signInWithPopup(auth, googleProvider) }> Enter with Google 
         
        </Button>
        <h6 className="login__or"> or </h6>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="login__input" type="email" placeholder="user@example.com" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="login__input" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-grid ">
            <Button className="login__button" variant="outline" size="md" type="submit">
              {isRegistering ? 'Sign Up': 'Sign In' }  
            </Button>
          </div>
        </Form>
       
        <Button className="login__isRegistering" variant="link" size="md" onClick={() => setIsRegistering(!isRegistering)}>  
          {isRegistering ? 'Do you already have an account? Sign in': 'Are you new? Register here !' } 
        </Button> 
       
      </Stack>
    </Container>
  );
};

export default Login;
