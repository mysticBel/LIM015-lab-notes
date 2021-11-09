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
        const docRef = doc(firestore, `memories_users/${emailUser}`);
         updateDoc(docRef, {posts: [...newArrayPosts]});
        // update state
        setArrayPosts(newArrayPosts); 
    }


    // async function editPost


    return(
        <Container className=" allposts__container">
            <Stack  gap={4}  className=" col-md-9 mx-auto stack__container"  >
                {arrayPosts.map((objectPost) => {
                    return (
                        <>
                       
                        <Col ><Row className=" ml-auto "><Col> <i> {objectPost.title} </i></Col>
                              <Col sm={1}> <Button variant="outline"><box-icon name='edit' color='rgba(110,199,185,0.6)' ></box-icon></Button></Col>
                              <Col sm={1} > <Button variant="outline" onClick={() => removePost(objectPost.id)}  ><box-icon name='trash' type='solid' color='rgba(241,141,104,0.6)' ></box-icon></Button></Col>
                            
                            </Row>
                            
                            <Col> {objectPost.body}</Col> 
                            
                            
                        </Col>
                     
                       
                        </>
                    )

                })}

            </Stack>
           
        </Container>
    );

    
};

export default AllPosts;