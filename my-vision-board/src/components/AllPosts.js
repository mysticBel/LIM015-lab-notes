import React from 'react';
import { Stack , Container, Col, Row, Button } from 'react-bootstrap'

const AllPosts = (arrayPosts) => {
    return(
        <Container>
            <Stack>
                {arrayPosts.map((objectPost) => {
                    return (
                        <Col>
                          <Col> {objectPost.image}</Col>
                          <Col> {objectPost.title}</Col>
                          <Col> {objectPost.body}</Col>
                          <Row>
                           <Col> <Button>Edit</Button></Col>
                           <Col> <Button>Delete</Button></Col>
                          </Row>
                        </Col>
                    )

                })}

            </Stack>
           
        </Container>
    ) 

    
}

export default AllPosts;