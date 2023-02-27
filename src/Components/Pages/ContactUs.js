import React from "react";
import {  useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = (props) => {
    const [submit, setSubmit] = useState(false);
    const[error, setError]=useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if (nameRef.current.value === '' || emailRef.current.value === '' || phoneRef.current.value === '' ) {
            setError(true);
            setSubmit(false);
            return;
        }
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone : phoneRef.current.value
        }
        console.log(user);
        props.onPost(user);
        setSubmit(true);
        setError(false);
    }
  return (
    <>
      <Container className="my-5" style={{ height:"90vh"}}>
        <Row className="justify-content-center ">
          <Col xs={5}>
            <Card className="m-2 shadow">
                <Card.Header  className="m-3 text-center">
                   <h4> Contact us</h4>
                </Card.Header>
                <Card.Body>
              <Form>
              {error && <div className="mt-1 text-center text-danger">Enter some valid data.</div>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{color:"black", fontSize:"1.2rem"}}>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{color:"black", fontSize:"1.2rem"}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{color:"black", fontSize:"1.2rem"}}>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" ref={phoneRef}/>
                </Form.Group>
                <div className="text-center">
                <Button onClick={onSubmitHandler} variant="outline-dark" type="submit">
                  Submit
                </Button>
                {submit && <h4>Thank you for contacting us</h4>}
                </div>
                
              </Form>
              </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
