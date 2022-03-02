import React,{useState } from 'react';
import { useHistory } from 'react-router-dom';
import './payment.css';
import validator from 'validator';
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2";
import "../../node_modules/sweetalert2/src/sweetalert2.scss";
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Payment(props) {
  
     var history = useHistory();
     const [cookies, setCookie] = useCookies(['user']);

    const [user, setUser] = useState({
      fname: "",
      email: cookies.user,
      adr: "",
      city: "",
      state: "",
      zip: "",
      cname: "",
      ccnum: "",
      expmonth: "",
      expyear: "",
      cvv: "",
      
    });
    
    var postData = {
      email: user.email,
      adr: user.adr,
      city: user.city,
      state: user.state,
      image: props.location.state.image,
      title: props.location.state.title,
      price: props.location.state.price
    };

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    let id, value;
    const handleInputs = (e) => {
      id = e.target.id;
    value = e.target.value;
    setUser({ ...user, [id]: value });
    };
    //console.log(props);
    const alert=()=>{
      
     // let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
     //let address = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    //  const date = new Date ();
    // const month = January;
    // const year = 2022;
      const {fname,email,adr,city,state,zip,cname,ccnum,expmonth,expyear,cvv} = user;
      var error = document.getElementById("error");      
      var error1 = document.getElementById("error1");      
      var error2 = document.getElementById("error2");      
      var error3 = document.getElementById("error3");      
      var error4 = document.getElementById("error4");      
      var error5 = document.getElementById("error5");      
      var error6 = document.getElementById("error6");      
      var error7 = document.getElementById("error7");      
      var error8 = document.getElementById("error8");      
      var error9 = document.getElementById("error9");
      var error10 = document.getElementById("error10");         

      
      
      if(fname.length < 3 || fname.length > 20 ){ 
        error.textContent = "First Name Should be More Than 3 And less than 20 letters";
            error.style.color = "red";
            console.log(error.textContent);
      }
     else if(fname.length > 3 || fname.length < 20){
        error.textContent = "";
        console.log(error.textContent);
      }
      if(!(validator.isEmail(email))){
        error1.textContent = "Email Should contain @ and a proper domain";
            error1.style.color = "red";
      }
      else if((validator.isEmail(email))){
        error1.textContent="";
      }
      if(adr.length<5){
        error2.textContent = "Address should be not be empty";
            error2.style.color = "red"; 
      }
      else if(adr.length>5){
            error2.textContent="";
      }
      if(city.length<1 || !city.match(/^[a-zA-Z]*$/)){
        error3.textContent = "City Should Only Contain Alphabets no number,special Character";
            error3.style.color = "red";  
      }
      else if(city.length>1 || city.match(/^[a-zA-Z]*$/)){
        error3.textContent="";
  }
      if(state.length<1 || !state.match(/^[a-zA-Z]*$/)){
        error4.textContent = "State Should Only Contain Alphabets no number,special Character";
            error4.style.color = "red";  
      }
      else if(state.length>1 || state.match(/^[a-zA-Z]*$/)){
        error4.textContent="";
  }
      if(zip.length<6 || !zip.match(/^[0-9]+$/)){
        error5.textContent = "Zip Code should Be of 6 numbers only and should not contains any alphabets";
            error5.style.color = "red";
     
      }
      else if(zip.length>6 || zip.match(/^[0-9]+$/)){
        error5.textContent="";
  }
      if(cname<3 || fname.data!==cname.data || fname.length!==cname.length){
        error6.textContent = "Card Name should not be empty and should be same as that of full name";
            error6.style.color = "red";
        
      }
      else if(cname>3 || fname.data===cname.data || fname.length===cname.length){
        error6.textContent="";
  }
      if(ccnum.length !== 16  || isNaN(ccnum)){
        error7.textContent = "Your Credit Card is Not activated Please activate it.";
            error7.style.color = "red";
     
      }
      else if(ccnum.length === 16  || !isNaN(ccnum)){
        error7.textContent="";
  }
      if(expmonth.length < 3 || !expmonth.match(/^[a-zA-Z]*$/)){
        error8.textContent = "Credit Card Expiry month should not be before the existing month";
            error8.style.color = "red";
       
      }
      else if(expmonth.length > 3 || expmonth.match(/^[a-zA-Z]*$/)){
        error8.textContent="";
  }
      if(!expyear.match(/^[0-9]+$/)){
        error9.textContent = "Credit card Expiry year should not be less than the existing year";
            error9.style.color = "red";
       
      }
      else if(expyear.match(/^[0-9]+$/)){
        error9.textContent="";
  }
      if(cvv.length< 3 || cvv.length>3 || !cvv.match(/^[0-9]+$/)){
        
        error10.textContent = "CVV should be consists of 3 numbers only";
            error10.style.color = "red"; 
      }
      else if(cvv.length===3 || cvv.match(/^[0-9]+$/)){
        error10.textContent="";
  }
  console.log(error);
      if(error.textContent===""&&error1.textContent===""&&error2.textContent===""&&error3.textContent===""&&error4.textContent===""&&error5.textContent===""&&error6.textContent===""&&error7.textContent===""&&error8.textContent===""&&error9.textContent===""&&error10.textContent===""){
          console.log("lol");
        Swal.fire({
          title: "Payment Succesfull ",
          text: "Your Order Had Been Placed, You will Be Redirected to Home Page",
          confirmButtonText: "Cool",
        }).then((res) => {
          axios.post("http://localhost:5000/otp", postData, axiosConfig)
        
              history.push("/homepage")
            });
      }
  }
    
  return(
      <div class="row1">
  <div class="col1-75">
    <div class="container">
        <div class="row1">
          <div class="col1-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="fname" value={user.fname} onChange={handleInputs}/>
            <span id="error"></span>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" value={user.email} onChange={handleInputs} disabled/>
            <span id="error1"></span>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="adr" placeholder="542 W. 15th Street" value={user.adr} onChange={handleInputs}/>
            <span id="error2"></span>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York" value={user.city} onChange={handleInputs}/>
            <span id="error3"></span>
            <div class="row1">
              <div class="col1-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" value={user.state} onChange={handleInputs}/>
                <span id="error4"></span>
              </div>
              <div class="col1-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" value={user.zip} onChange={handleInputs}/>
                <span id="error5"></span>
              </div>
            </div>
          </div>

          <div class="col1-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cname" placeholder="John More Doe" value={user.cname} onChange={handleInputs}/>
            <span id="error6"></span>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="ccnum" placeholder="1111-2222-3333-4444" value={user.ccnum} onChange={handleInputs}/>
            <span id="error7"></span>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" value={user.expmonth} onChange={handleInputs}/>
            <span id="error8"></span>

            <div class="row1">
              <div class="col1-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" value={user.expyear} onChange={handleInputs}/>
                <span id="error9"></span>
              </div>
              <div class="col1-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" value={user.cvv} onChange={handleInputs}/>
                <span id="error10"></span>
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn" onClick={alert}/>
    </div>
  </div>

  <div class="col1-25">
    <div class="container" style={{marginTop:"22%"}}>
      <h4>Cart</h4>
      <hr/>
      <p>Total <span class="price" style={{color:"black"}}><b>{props.location.state.price}</b></span></p>
    </div>
  </div>
</div>
    
    )

  }
export default Payment;