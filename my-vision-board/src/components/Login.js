import React, { useState } from "react";
import { Stack, Container, Form, Button, Image } from "react-bootstrap";

const Login = () => {
  // creating a state that checks if the user is logging or not(boolean)
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <Container fluid>
      <Stack gap={3} className="col-md-3 mx-auto">
        <Image src="https://www.seekpng.com/png/full/17-171385_this-free-icons-png-design-of-cute-elephant.png" />
        <h1 class="text-center">My Vision Board </h1>
        <h3 class="text-center"> Dream, Believe, Plan, Do ! </h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-grid ">
            <Button variant="secondary" size="md" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <Button variant="secondary" size="md" type="submit">
          Enter with Google
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
