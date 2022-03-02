import React, { useState, useEffect, useRef } from "react";
import "./LoginResume.css";
import lottie from "lottie-web";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';


export default function Signin() {
  const container = useRef(null);
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);

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
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkCredentials = async () => {
    //console.log("login");

    const {username, password} = user

    if(!username || !password){
        window.alert("please fill all feilds.")
    }else{

      const resp = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await resp.json();
     console.log(data)

      if(resp.status === 400 || !data){
        window.alert("INVALID CREDEINTIALS");
      }else{
        setCookie('user', username);
         window.alert("LOGIN SUCCESSFULLY");
         history.push("/homepage")
      }
       
    
    }
  };

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
      <div className="animation" ref={container} style={{ width: "50%" }}></div>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>

          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="username"
                  onChange={handleInputs}
                  value={user.username}
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
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign In"
                  onClick={checkCredentials}
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
                <a href="/"> create a new account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
