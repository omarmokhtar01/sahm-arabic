import React, { useState } from 'react';
import './order.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import FacWhite from '../../images/FacWhite.png'
import StoresColor from '../../images/storesColor.png'
import { Link } from 'react-router-dom';
import search from '../../images/search.png'
import numberImg from '../../images/number.png'
import storeColor from '../../images/storecolor.png'
import star from '../../images/star.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod8 from '../../images/prod8.png'
import prod1 from '../../images/prod1.png'
import prod5 from '../../images/prod5.png'
import prod4 from '../../images/prod4.png'
import icon from '../../images/icon.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import black from '../../images/black.png'
import wear from '../../images/wear.png'
import closeImg from '../../images/close.png'
import deleteIcon from '../../images/deleteIcon.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import profileFac from '../../images/profileFac.png'
import profileStore from '../../images/ProfileStore.png' 
import reorderImg from '../../images/reorderImg.png'
import rating from '../../images/rating.png'
import stars from '../../images/stars.png'
import ProfileFac2 from '../../images/ProfileFa2.png'
import NavbarLogin from '../NavBar/NavbarLogin';
import ProductCard from '../Products/ProductCard';
const FinishedOrderDetailsStore = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <>  
    <NavBarBlue />

    <NavbarLogin />


    <Container>

<Row style={{marginBottom:'80px'}} >
<p style={{display:'flex', fontSize:'25px', fontWeight:'bold', color:'#220E5F', marginTop:'15px'}}>  تفاصيل الطلب </p>
    <Col sm={12} xs={12} md={7}  style={{marginTop:'10px'}} >


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'20px'}}>
     

    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>


<div style={{display:'flex' , justifyContent:'center' }}  >

 

  <img src={profileFac} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'8px' }} >
  <p style={{fontSize:'19px', color:'#220E5F', textAlign:'start', fontWeight:'bold'}}>  المتجر</p>
  <p style={{fontSize:'17px', color:'#636270', textAlign:'start', marginTop:'-15px'}}>  بلاك اوت للملابس</p>

</div>


</div>

<div style={{display:'flex', marginLeft:'10px', gap:'8px'}}>

<div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
    <div onClick={handleShow} style={{border: "1.85px solid #FFB80130", borderRadius:'12px', color:'#F4861C', 
    fontWeight:'bold',  display:'flex', background:'#FFB80130', padding:'2px 10px', cursor:'pointer'}}> <div> <img src={rating} style={{paddingLeft:'5px'}}  /> </div> 
   تقييم الطلب</div>
 </div>


 <Modal show={show} onHide={handleClose}  >

    <div style={{display:'flex', justifyContent:'center'}}>
     <p style={{fontSize:'25px', fontWeight:'bold', color:'#220E5F'}}> تقييم الطلب</p></div> 

    
    <div style={{border:' 2px solid #ECECEC', borderRadius:'12px', margin:' 2px 30px', padding:'20px'}}>

    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}> 
       <div><img src={profileFac} /></div>
       <p style={{color:'#051427', fontSize:'17px', fontWeight:'bold'}}> بلاك اوت للملابس</p>
     
     </div>

    <div style={{border:' 1.69px solid #ECECEC', borderRadius:'12px', display:'flex', justifyContent:'space-between', padding:'3px 10px'}} >
     <p style={{color:'#051427', fontSize:'17px', fontWeight:'500'}}> قييم المتجر</p>
     <div><img src={stars} /></div>

    </div>

    <div >
    <form class="form-floating mt-2 w-100 ">
          <textarea type="textarea" class="form-control" id="floatingInputValue" placeholder=" أكتب رأيك" 
          value="هذا النص هو مثال لنص يمكن أن يستبدل في نفس
المساحة، لقد تم توليد هذا النص. " 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'30px' , height:'100px'}}> </textarea>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  أكتب رأيك</label>
        </form>

    </div>

   

    </div>


    <div style={{display:'flex', justifyContent:'center', marginTop:'3px'}}>
     <p style={{fontSize:'20px', fontWeight:'bold', color:'#220E5F'}}> تقييم المنتجات</p></div> 

     



      <div style={{border:' 2px solid #ECECEC', borderRadius:'12px', margin:'2px 30px', padding:'20px'}}>

<div style={{display:'flex', justifyContent:'space-between'}}>

<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'40px'}}> 

<div><img src={prod2} width='50px' height='62px' style={{marginTop:'-20px', marginLeft:'10px'}}  /></div>
<div style={{display:'flex', flexDirection:'column'}}>  
<p style={{width:'70%', color:'#220E5F', fontSize:'15px'}}> موبايل سامسونج جالاكسي
بشريحتين اتصال</p>
<div style={{display:'flex', gap:'5px'}}>
<p style={{marginTop:'-10px', color:'#E51937', fontWeight:'bold'}}>500 جنيه </p>
<p style={{marginTop:'-10px', color:'#7A808A'}}>500 جنيه </p>

</div>

 </div>

</div>

<div style={{display:'flex'}}>
 <div><img src={offer} style={{ width:'34px', marginTop:'-30px'}} /></div>
 </div>


</div>
   


    <div style={{border:' 1.69px solid #ECECEC', borderRadius:'12px', display:'flex', justifyContent:'space-between', padding:'3px 10px'}} >
     <p style={{color:'#051427', fontSize:'17px', fontWeight:'500'}}> قييم المنتج</p>
     <div><img src={stars} /></div>

    </div>

    <div >
    <form class="form-floating mt-2 w-100 ">
          <textarea type="textarea" class="form-control" id="floatingInputValue" placeholder=" أكتب رأيك" 
          value="هذا النص هو مثال لنص يمكن أن يستبدل في نفس
المساحة، لقد تم توليد هذا النص. " 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'30px' , height:'100px'}}> </textarea>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  أكتب رأيك</label>
        </form>

    </div>

    </div>

    
    <div  className='d-flex mt-1 mb-1' style={{borderRadius:'30px', display:'flex', justifyContent:'center',alignItems:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none'
            , paddingTop:'5px', display:'flex', justifyContent:'center' }} 
           className='profileButton2' > تاكيد</div>
    </div>
      
      </Modal>





    <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
    <div style={{border: "1.85px solid #7EA91A61", borderRadius:'12px', padding:'2px 10px', color:'#7EA91A', 
    fontWeight:'bold', background:'rgb(126 169 26 / 12%)'}}>تم الاستلام</div>
    </div>
    </div>

   
   </div>












     <div style={{display:'flex'}}> <div style={{color:'#7A808A', fontSize:'18px', margin:'10px 2px'}}> عدد المنتجات: 2</div> </div>

     <div >
    

    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>


      <div style={{display:'flex' , justifyContent:'center' }}  >
    
       
      
        <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


      <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
        <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
      
   <div style={{display:'flex'}}>
       <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 83 جنيه  </p>
       <p style={{color: "#7A808A", fontSize:'18px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
   </div>
   
   <div style={{display:'flex', marginTop:'10px'}}>
    <p> اللون :</p>
    <div><img src={black} /></div>
   </div>

   <div style={{color:'#585858', display:'flex', marginTop:'-15px', fontWeight:'500'}}> الحجم: 128 جيجا </div>
   <div style={{color:'#585858', display:'flex', fontWeight:'500'}}> الكمية: 1 قطعة</div>

 


     
     </div>


     </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

    <div style={{display:'flex', gap:'15px'}}>  
        <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>

<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px', marginLeft:'10px'}}> 
<div><img src={reorderImg}/></div>
</div>
    

        </div>
         


         
         </div>

    </div>


   </div>







   <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF', marginTop:'15px'}}>


<div style={{display:'flex' , justifyContent:'center' }}  >

 

  <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>  مولفيكس حفاضات اطفال بانتس عبوة ميجا</p>

<div style={{display:'flex'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 300 جنيه  </p>

</div>



<div style={{color:'#585858', display:'flex', fontWeight:'500', marginTop:'15px'}}> الكمية: 1 كرتونة</div>





</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>


<div style={{display:'flex', gap:'15px'}}>  
  <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>

<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px', marginLeft:'10px'}}> 
<div><img src={reorderImg}/></div>
</div>


  </div>
   


   
   </div>

</div>


</div>







   
</div>


    </div>



    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'20px'}}>
     

     <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>
 
 
 <div style={{display:'flex' , justifyContent:'center' }}  >
 
  
 
   <img src={profileStore} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />
 
 
 <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'8px' }} >
   <p style={{fontSize:'19px', color:'#220E5F', textAlign:'start', fontWeight:'bold'}}>  المتجر</p>
   <p style={{fontSize:'17px', color:'#636270', textAlign:'start', marginTop:'-15px'}}>  الهدى للملابس  </p>
 
 </div>
 
 
 </div>
 
 <div style={{display:'flex',margin:'10px 15px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', padding:'5px 20px 8px 20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex'}}> 
  تم الالغاء </div>
 </div>
 
 
    
    </div>
 
 
 
 
 
 
 
 
 
 
 
 
      <div style={{display:'flex'}}> <div style={{color:'#7A808A', fontSize:'18px', margin:'10px 2px'}}> عدد المنتجات: 2</div> </div>
 
      <div >
     
 
     <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>
 
 
       <div style={{display:'flex' , justifyContent:'center' }}  >
     
        
       
         <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />
 
 
       <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
         <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
       
    <div style={{display:'flex'}}>
        <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 500 جنيه  </p>
       
    </div>
    
    <div style={{display:'flex', marginTop:'10px'}}>
     <p> اللون :</p>
     <div><img src={black} /></div>
    </div>
 
    <div style={{color:'#585858', display:'flex', marginTop:'-15px', fontWeight:'500'}}> المقاس: M</div>
    <div style={{color:'#585858', display:'flex', fontWeight:'500'}}> الكمية: 1 شوال</div>
 
  
 
 
      
      </div>
 
 
      </div>
 
 

    
 
     <div style={{display:'flex', gap:'15px'}}>  
         <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
 
 <div style={{display:'flex', marginTop:'20px',marginLeft:'12px'}}> 
 <div><img src={reorderImg}/></div>
 </div>
     
 
  
          
 
 
          
          </div>
 
     </div>
 
 
    </div>
 
 
 
 
 
 
 
   
    
 </div>
 
 
     </div>

    
   
    </Col>

    <Col sm={12} xs={12} md={5}  style={{marginTop:'10px'}} >


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px 20px 20px', marginBottom:'15px'}}>
    <div style={{display:'flex', justifyContent:'space-between'}}>
     <p style={{color:'#220E5F', fontWeight:'bold'}}>  رقم الطلب: 1541569876</p>
     <p style={{color:'#7A808A', fontWeight:'500'}}>  22/01/2023 - 09:30 AM   </p>
 
  </div>

  <div style={{display:'flex', justifyContent:'space-between'}}>

  <div>
    <div style={{display:'flex', gap:'8px'}}> 
    <div><img src={numberImg} /></div>
    <p style={{fontSize:'18px', color:'#585858'}}> عدد المنتجات: 3</p>
    </div>

    <div style={{display:'flex', gap:'8px', marginTop:'-10px'}}> 
    <div><img src={storeColor} /></div>
    <p style={{fontSize:'18px', color:'#585858'}} > عدد المتاجر: 2</p>
    </div>
 
  </div>

  <div style={{display:'flex',marginTop:'-25px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
    <div style={{border: "2px solid #039CED61", borderRadius:'20px', padding:'2px 10px', color:'#220E5F', 
    fontWeight:'bold',  display:'flex', background:'#FFFFFF'}}> <div> <img src={reorderImg} style={{paddingLeft:'5px'}}  /> </div> 
    اعاده الطلب</div>
 </div>
  </div>




  <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{ marginLeft:'220px', marginTop:'15px', position:'absolute'}}>
        <img src={locat} width='25px' height='25px'/>
        </div>


        <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'245px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>


  </div>



    
    </div>




    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px 20px 20px', marginBottom:'15px'}}>
   
    <p style={{color:'#220E5F' , display:'flex', textAlign:'start', fontWeight:'bold', fontSize:'18px'}}> طريقه الدفع </p>
     
     <div style={{background:'#FFFFFF' , borderRadius:'10px',padding:'8px 20px 2px 20px'}}>

     <div style={{display:'flex', justifyContent:'space-between'}}>
     <p style={{color:'#1B273A', fontSize:'18px'}}>  عند الاستلام</p>
        <div><img src={icon3}/></div>
     </div>

     </div>


    
    </div>


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px'}}>



<div>
<div style={{display:'flex', justifyContent:'space-between'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  قيمة المنتجات</p>
    <p style={{color:'#717171', fontSize:'18px'}} > 12.800 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}} >  قيمة التوصيل</p>
    <p style={{color:'#717171', fontSize:'18px'}}> 50 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}} >  الضربيه المضافه</p>
    <p style={{color:'#717171', fontSize:'18px'}} > 50 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  قيمه الخصم</p>
    <p style={{color:'#717171', fontSize:'18px'}}> -100 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  الإجمالي</p>
    <p style={{color:'#E51937', fontSize:'18px'}}> 12.800 جنيه</p>
</div>

</div>



    
    </div>


    </Col>
</Row>
</Container>

<Container>
        <Row>
            <Col>  <div style={{marginLeft:'-55px', borderBottom:'2px solid #EEEEEE ', width:'100%' , marginBottom:'25px'}}></div></Col>
        </Row>
      </Container>

      <div class="container text-center mb-5 p-3">
    <h5 style={{display:'flex', fontWeight:'bold', marginBottom:'15px'}}>منتجات  اخري</h5>
    
   <ProductCard />

 

</div>
    </>;
}



export default FinishedOrderDetailsStore;