
import React, { useState } from 'react';
import logo from "../../images/logo.png";
import './Auth.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import RegisterPage from './RegisterPage';


const ForgetPass4 = () => {

     //to make modal
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


    return <>
      <Container>
       <Row>
        <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
         <div style={{ width:'400px' ,borderRadius:'15px' ,padding:'25px',}}>

         <img src={logo}  style={{width:'172px', marginLeft:'25px'}}/>

       <h5 style={{fontWeight:'700' ,  color:'#220E5F', marginBottom:'30px'}}  >     تفعيل رقم الموبايل    </h5>

            <p style={{color:'rgba(122, 134, 154, 1)' , fontSize:'17px'}}>
            لقد قمنا بارسال رمز التأكيد الى رقم موبايلك</p>
       <Form>
        <div>
       <div style={{display:'flex' , gap:'10px' , justifyContent:'center' ,  marginBottom:'10px'}} >
           <Form.Control type="text" placeholder="2" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                  padding:'15px 35px 15px 15px' , width:'25%' }}  />

           <Form.Control type="text" placeholder="2" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                  padding:'15px 35px 15px 15px' , width:'25%' }}  />
                 
            <Form.Control type="text" placeholder="2" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                  padding:'15px 35px 15px 15px' , width:'25%' }}  />

      
           <Form.Control type="text" placeholder="2" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                  padding:'15px 35px 15px 15px' , width:'25%' }}  />
      </div>

<div style={{display:'flex', justifyContent:'center' , flexDirection:'column'}}  >
<span style={{color:'rgba(122, 134, 154, 1)' }}>  00:45  </span> 
        <a href=''  style={{color:'#7EA91A' }}>  إعادة ارسال الرمز </a>
</div>
       
        </div>

         <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
              <Button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px'}}
               className='profileButton' >تفعيل</Button>
        </div>
        </Form>

        </div>
        </Col>
      </Row>
    </Container>

    </>;
}

export default ForgetPass4;