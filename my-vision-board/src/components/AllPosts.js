import React from 'react';
import { Stack , Container, Col, Row, Button } from 'react-bootstrap'

import firebaseApp from '../credentials';
import { getFirestore, updateDoc, doc} from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);

const AllPosts = ({arrayPosts , emailUser, setArrayPosts}) => {

    async function removePost(idPostToDelete){
        // create new array posts 
        const newArrayPosts = arrayPosts.filter((objectPost)=> objectPost.id !== idPostToDelete);
        // update backend
        const docRef = doc(firestore, `myVisionBoard_users/${emailUser}`);
         updateDoc(docRef, {posts: [...newArrayPosts]});
        // update state
        setArrayPosts(newArrayPosts); 
    }


    // async function editPost


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
                           <Col> <Button onClick={() => removePost(objectPost.id)}  >Delete</Button></Col>
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