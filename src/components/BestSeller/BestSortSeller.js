import React from 'react';
import './seller.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import star from '../../images/star.png'
import fav from '../../images/fav.png'
import share from '../../images/share.png'
import search from '../../images/search.png'
import offer from '../../images/off.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import group from "../../images/Group1.png";
import plate from "../../images/plate.png";
import group1 from "../../images/Group2.png";
import sortIcon from "../../images/sort-icon.png";
import { Link } from 'react-router-dom';
import closeImg from '../../images/close.png'
import NavbarLogin from '../NavBar/NavbarLogin';
import Pagination from '../Pagination/Pagination';

const BestSortSeller = () => {
    return <>
     <NavBarBlue />
     <NavbarLogin />

    <Container>
      <Row>
        <Col>
        <div style={{marginTop:'15px'}}>
          <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'25px', paddingTop:'25px' , borderRadius:'10px'}} className=" ground-img">
          الاكثر مبيعاً</h3>
          </div>
        </Col>
      </Row>
    </Container>

   <Container style={{marginTop:'20px'}}>
            <Row>
                <Col sm='2' >
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'250px' , borderRadius:'15px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >الفئات</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />الكل  </label>
                     <label style={{margin:'3px'}} class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />  الازياء الرجالي  </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' /> الازياء الحريمي  </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />  الاجهزه المنزليه   </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />  الحريمي  </label> 
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
    
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'150px' , borderRadius:'15px', marginTop:'10px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >اللون</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                       <div><img src={plate} width='150px' /></div>
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
    
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'150px' , borderRadius:'15px', marginTop:'10px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >الحجم</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'15px', gap:'3px'}}>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  S</div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px' , background:'#FFFFFF'}}>  M </div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  L</div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px', background:'#FFFFFF' }}>  XL </div>
                  
            </div>
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
  
                 <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
                    <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'18px' , border:'none' , paddingTop:'7px', display:'flex', justifyContent:'center'}} 
                    className='profileButton' > تاكيد   </button>
                 </div>
                </Col>
    
                <Col sm='10'>
                <div className='d-flex justify-content-between mb-4'>
                    <Form >
                    <FormControl type="search" placeholder='ابحث باسم المنتج...' className="me-2 w-100  " aria-label="Search" />
                        <img src={search} alt='' width='20px' height="20px" style={{position:'absolute' , marginTop:'-30px' , marginRight:'70px'}}/>
                    </Form>
    
                <div style={{display:'flex' , gap:'10px'}}>
                 <img src={sortIcon} alt='' width='15px' height="15px" style={{ marginRight:'5px', position:'absolute' , marginTop:'10px'}} />
    
                 <NavDropdown title="الترتيب حسب" id="collapsible-nav-dropdown" style={{background:'linear-gradient(0deg, rgba(1, 154, 237, 0.08), rgba(1, 154, 237, 0.08)),linear-gradient(0deg, rgba(3, 156, 237, 0.15), rgba(3, 156, 237, 0.15))' 
                    , border:' 1.5px solid #039CED26' ,borderRadius:'25px' , padding:'5px 25px 5px 10px' , color:'#220E5F' , fontWeight:'bold', fontSize:'14px' } }>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                 </NavDropdown>
    
                  <Link to='/Best-seller' >
                  <img src={group1}  width='35px'  height='35px' />
                  </Link>
                  
                  <img src={group} alt=''  width='35px' height="35px"  />
                 </div>
                </div>
    
                <Row >
                <Col xs="12" md="6" lg="6" className='mb-3'   >
                <Link to='/store-product' style={{textDecoration:'none'}}>
                            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
                    
                  

                    
                              <div style={{display:'flex' , justifyContent:'center' }}  >
                            
                                <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                                <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />
                    

                              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
                              

                                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                              <div><img src={star} alt=''  /></div>
                                
                                <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
                            </div>

                            <div style={{display:'flex', marginRight:'15px'}}>
                                <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                                <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
                              
                            </div>

                              </div>
          

                              </div>
        

              <div style={{display:'flex', flexDirection:'column'}}>
        <div><img src={offer} style={{marginLeft:'20px'}} /></div>



            </div>
                

                            </div>
                </Link>                   
                 </Col>

  <Col xs="12" md="6" lg="6" className='mb-3'   >
        
             <Link to='/store-product-unavailable' style={{textDecoration:'none'}}>
          <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
          <div style={{display:'flex' , justifyContent:'center' }}  >
        
           <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
            <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


          <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
            <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
          
            <div style={{display:'flex', textAlign:'center', alignItems:'center'}}> 
              <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
              fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
              <div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>

            <div style={{display:'flex', marginRight:'15px'}}>
              <div><img src={star} alt=''  /></div>
                <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
            </div>

       <div style={{display:'flex', marginRight:'15px'}}>
           <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
           <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
          
       </div>

         </div>
         </div>

<div style={{display:'flex', flexDirection:'column'}}>
   <div><img src={offer} style={{marginLeft:'20px'}} /></div>
</div>
       </div>
  </Link>     
                </Col>

        <Col xs="12" md="6" lg="6" className='mb-3'   >
        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
          <div style={{display:'flex' , justifyContent:'center' }}  >
        
           <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
            <img src={prod5} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


          <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
            <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
          

            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
         <div><img src={star} alt=''  /></div>
           
           <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
       </div>

       <div style={{display:'flex', marginRight:'15px'}}>
           <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
           <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
          
       </div>

         </div>


         </div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px'}} /></div>

</div>


       </div>
       
    </Col>

    <Col xs="12" md="6" lg="6" className='mb-3'   >
<div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
<div style={{display:'flex' , justifyContent:'center' }}  >

<div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
<img src={prod4} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
<p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<div><img src={star} alt=''  /></div>

<p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
       </div>

        <div style={{display:'flex', marginRight:'15px'}}>
        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
        <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

        </div>
     </div>
  </div>

    <div style={{display:'flex', flexDirection:'column'}}>
      <div><img src={offer} style={{marginLeft:'20px'}} /></div>
    </div>
</div>
   </Col>

   <Col xs="12" md="6" lg="6" className='mb-3'   >
        

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




          <div style={{display:'flex' , justifyContent:'center' }}  >
        
           <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
            <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


          <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
            <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
          

            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
         <div><img src={star} alt=''  /></div>
           
           <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
       </div>

       <div style={{display:'flex', marginRight:'15px'}}>
           <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
           <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
          
       </div>

         </div>


         </div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px'}} /></div>



</div>


       </div>
       
    </Col>

    <Col xs="12" md="6" lg="6" className='mb-3'   >


<div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




<div style={{display:'flex' , justifyContent:'center' }}  >

<div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
<img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
<p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<div><img src={star} alt=''  /></div>

<p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
</div>

<div style={{display:'flex', marginRight:'15px'}}>
<p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
<p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

</div>

</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px'}} /></div>



</div>


</div>

   </Col>

   <Col xs="12" md="6" lg="6" className='mb-3'   >


<div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




<div style={{display:'flex' , justifyContent:'center' }}  >

<div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
<img src={prod5} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
<p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<div><img src={star} alt=''  /></div>

<p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
</div>

<div style={{display:'flex', marginRight:'15px'}}>
<p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
<p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

</div>

</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px'}} /></div>


</div>


</div>

   </Col>

    <Col xs="12" md="6" lg="6" className='mb-3'   >


    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




    <div style={{display:'flex' , justifyContent:'center' }}  >

    <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
    <img src={prod4} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


    <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
    <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
    <div><img src={star} alt=''  /></div>

    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
    </div>

    <div style={{display:'flex', marginRight:'15px'}}>
    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
    <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

    </div>

    </div>


    </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>


    </div>


    </div>

    </Col>

    <Col xs="12" md="6" lg="6" className='mb-3'   >
        

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




          <div style={{display:'flex' , justifyContent:'center' }}  >
        
           <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
            <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


          <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
            <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
          

            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
         <div><img src={star} alt=''  /></div>
           
           <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
       </div>

       <div style={{display:'flex', marginRight:'15px'}}>
           <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
           <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
          
       </div>

         </div>


         </div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px'}} /></div>



</div>


       </div>
       
    </Col>

    <Col xs="12" md="6" lg="6" className='mb-3'   >
      <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




      <div style={{display:'flex' , justifyContent:'center' }}  >

      <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
      <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


      <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
      <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


      <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
      <div><img src={star} alt=''  /></div>

      <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
      </div>

      <div style={{display:'flex', marginRight:'15px'}}>
      <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
      <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

      </div>

      </div>


      </div>


      <div style={{display:'flex', flexDirection:'column'}}>
      <div><img src={offer} style={{marginLeft:'20px'}} /></div>



      </div>


      </div>

   </Col>
    <Col xs="12" md="6" lg="6" className='mb-3'   >
    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
    <div style={{display:'flex' , justifyContent:'center' }}  >

    <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
    <img src={prod5} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />

    <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
    <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
    <div><img src={star} alt=''  /></div>
    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
    </div>
    <div style={{display:'flex', marginRight:'15px'}}>
    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
    <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
    </div>
    </div>
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>
    </div>
    </div>
    </Col>
    <Col xs="12" md="6" lg="6" className='mb-3'   >
    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>
    <div style={{display:'flex' , justifyContent:'center' }}  >

    <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
    <img src={prod4} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


    <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
    <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
    <div><img src={star} alt=''  /></div>

    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
    </div>

    <div style={{display:'flex', marginRight:'15px'}}>
    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
    <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

    </div>

    </div>


    </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>


    </div>


    </div>
    </Col>
           
                </Row>
  <Pagination />
                </Col>
            </Row>
    </Container>

    </>;
}

export default BestSortSeller;