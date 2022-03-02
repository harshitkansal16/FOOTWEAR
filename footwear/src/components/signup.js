import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2";
import "../../node_modules/sweetalert2/src/sweetalert2.scss";
import "./LoginResume.css";
import lottie from "lottie-web";
import axios from "axios";


function LoginResume() {
  const container = useRef(null);
  const history = useHistory();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: require("../e_kart.json"),
    });
  }, [container]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    otp:  (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  var postOtp = {
    email: user.email,
    name: user.username,
    otp: user.otp
  };
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

  const alertBox = () => {

    if(!user.username || !user.email || !user.password || !user.cpassword){
       window.alert("please fill all required fields")
       history.push("/")
    }
    else{
    axios.post("http://localhost:5000/otp", postOtp, axiosConfig);
    Swal.fire({
      text: 'OTP HAS BEEN SENT TO YOUR REGISTERED EMAIL ID',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Enter Otp">`,
      confirmButtonText: 'Verify',
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        if (!login) {
          Swal.showValidationMessage(`Please enter Otp`)
        }else if(login!==user.otp){
          Swal.showValidationMessage(`Please fill Correct otp`)
        }
        return { login: login }
      }
    }).then((result) => {
       
      console.log(result);
      
      if(result.isDismissed === true){
        history.push("/");
      }
       else{ 
         if (result.value.login === user.otp) {
          postData();
        }
      } 
     

    })

  }
  }

  const postData = async (e) => {

    const { username, email, password, cpassword } = user;
    
    //console.log(user)

    if (!username || !email || !password || !cpassword) {
      window.alert("Must Fill All Fields");
    }
    else if (password !== cpassword) {
      window.alert("password should be match!");
    } else {

      
      //console.log("i am in");
      const resp = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          cpassword,
        }),
      });

      const data = await resp.json();
    
      console.log(data);
      if (resp.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }else{
        
        history.push("/homepage");
      }

   
  }

}

  return (
    <div
      className="head"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "1000px",
        backgroundColor: "#c8c8c8",
        color:"#6a6f8c",
	      font:"600 16px/18px 'Open Sans',sans-serif"
      }}
    >
      

        <div
          className="animation"
          ref={container}
          style={{ width: "50%" }}
        ></div>

        <div class="login-wrap">
          <div class="login-html">

          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab" style={{color: "white"}}>
            Sign Up
          </label>
           <div className="login-form">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="username"
                  value={user.username}
                  onChange={handleInputs}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  name="password"
                  onChange={handleInputs}
                  value={user.password}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  name="cpassword"
                  onChange={handleInputs}
                  value={user.cpassword}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  class="input"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign Up"
                  onClick={alertBox}
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk" onClick={() => {history.push('/signin')}}>
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  );
}

export default LoginResume;
