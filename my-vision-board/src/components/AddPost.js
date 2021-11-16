import React from "react";
import { Container, Form , Col, Button} from "react-bootstrap";
import firebaseApp from '../credentials';
import { getFirestore , updateDoc, doc} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);




// function to add Posts
const AddPost = ({arrayPosts, setArrayPosts, emailUser}) => {
let urlDownload;
    async function addNewPost(e){
        e.preventDefault();
        const bodyNewPost = e.target.idBodyNewPost.value;
        const titleNewPost = e.target.idTitleNewPost.value;
        // create new array 
        const newArrayPosts = [
          ...arrayPosts , 
          { 
            id: +new Date() , 
            body: bodyNewPost , 
            title: titleNewPost,
            url: urlDownload,
          },
        ]
        // update database Firestore
        const docRef = doc( firestore, `memories_users/${emailUser}`);
        updateDoc(docRef, {posts: [...newArrayPosts]});
        // update State 
        setArrayPosts(newArrayPosts);
        // clean form
        e.target.idBodyNewPost.value = "";
        e.target.idTitleNewPost.value = "";
        e.target.idimageNewPost.value = "";

    }
    
    async function fileHandler(e) {
      // detect file
      const fileLocal = e.target.files[0];
      // send to firebase storage
      const fileRef = ref(storage, `memories_storage/${fileLocal.name}`);
      await uploadBytes(fileRef, fileLocal);
      // get downlload url
      urlDownload = await getDownloadURL(fileRef);
    }


  return (
    <Container fluid className="mb-5 mt-5">
      <Form onSubmit={addNewPost} className="col-md-6 mx-auto">
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label> Create new entry </Form.Label>
          <Form.Control  className="form__input" type="text" placeholder="set a title for your day" id="idTitleNewPost"/>
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
         <Form.Label>Upload an image</Form.Label>
         <Form.Control  className="form__input" type="file" id="idimageNewPost" onChange={fileHandler} placeholder="add image"  size="sm" />
       </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write a content </Form.Label>
          <Form.Control as="textarea" rows={5} className="form__input" placeholder=" How do you feel? What happened?  Any reflection of the day?  What are the 3 things you learn today? etc ... tell more details about it" id="idBodyNewPost"/>
        </Form.Group>
        <Col  className="submitColumn" ><Button className="submit" variant="outline" type="submit">submit</Button></Col>
      </Form>
    </Container>
  );
};

export default AddPost;
