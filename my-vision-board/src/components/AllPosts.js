import React from 'react';
import { Stack , Container, Col, Row, Button } from 'react-bootstrap'

const AllPosts = ({arrayPosts}) => {
    return(
        <Container>
            <Stack gap={3} direction="horizontal"  >
                {arrayPosts.map((objectPost) => {
                    return (
                        <>
                        <Row>
                        <Col>
                         
                          <Col> {objectPost.title}</Col>
                          <Col> {objectPost.body}</Col>
                          <Row>
                           <Col> <Button>Edit</Button></Col>
                           <Col> <Button>Delete</Button></Col>
                          </Row>
                        </Col>
                        </Row>
                       
                        </>
                    )

                })}

            </Stack>
           
        </Container>
    );

    
};

export default AllPosts;