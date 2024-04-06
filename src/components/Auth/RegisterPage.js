import React, { useState } from 'react';
import './Auth.css'
import logo from "../../images/logo.png";
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

// import { Link } from 'react-router-dom';

import LoginPage from './LoginPage';
import ForgetPass4 from './ForgetPass4';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    //to make modal
    const [showw, setShoww] = useState(false);

    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return <>
    <Container>
     <Row  >
      <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
       
       <div style={{ width:'400px',borderRadius:'15px' ,padding:'25px' }}>
      
       <img src={logo}  style={{width:'172px', marginLeft:'25px'}}/>

<h5 style={{fontWeight:'700' ,  color:'#220E5F', marginBottom:'30px'}}  >    تسجيل جديد    </h5>
      <Form>
  
      <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label style={{ position:'absolute',fontSize:'15px',color:'#585858', display:'flex',
           padding:'3px 35px' }}>الاسم بالكامل</Form.Label>
         
          <Form.Control type="text" placeholder="Mohamed Ahmed " style={{ borderRadius: '10px', 
                padding:'25px 35px 15px 15px', marginBottom:'10px' }}  />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858', display:'flex' }}>رقم الموبيل</Form.Label>
            <div>
         

              <Button style={{position:'absolute', margin:'13px 60px 13px 13px' , borderRadius:'15px' 
               , background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)' , border:'none', padding:'3px 20px',
               color:'#FFFFFF'}}  onClick={handleShoww}     >تفعيل</Button>
           </div>

            <Modal  show={showw} onHide={handleClosee} style={{width:'410px'}}>
              <ForgetPass4 />
            </Modal>


            <Form.Control type="text" placeholder=" 789 456 123" style={{ borderRadius: '10px', 
                  padding:'25px 35px 15px 15px' , marginBottom:'10px' }}  />
                
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858' }}>البريد الالكتروني </Form.Label>
                   
                        <Form.Control type="text"
                            placeholder="username@mail.com" style={{  borderRadius: '10px', 
                            padding:'25px 38px 15px 15px', marginBottom:'10px'}}  />
       </Form.Group>

       <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858'  }}> كلمه المرور  </Form.Label>
            
            <Form.Control type="password"  style={{ borderRadius: '10px', 
                    padding:'25px 38px 15px 15px', marginBottom:'10px' }}  />
            </Form.Group>

       <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858' }}>تاكيد كلمه المرور  </Form.Label>
            
            <Form.Control type="password"  style={{  borderRadius: '10px', 
                   padding:'25px 38px 15px 15px', marginBottom:'10px' }}  />
            </Form.Group>


        <div style={{display:'flex' , alignItems:'center'}}>
           <p> <input style={{marginLeft:'10px' , marginTop:'10px'}} type='checkbox' />لقد قرأت و أوافق على   </p>


      <Link to='/conditions-and-roles' style={{textDecoration:"none"}}>
    
          <p style={{ color:'rgb(126, 169, 26)' , cursor:'pointer' , marginLeft:'10px'}}   >   الشروط والاحكام   </p>
           
      </Link>
   
       </div>

       <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px', display:'flex', justifyContent:'center'}} 
           className='profileButton' >تسجيل جديد</button>
    </div>
      </Form>

       </div>

      </Col>
    </Row>
  </Container>
  </>;
}



export default RegisterPage;