import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import './otp.css';
import { Link } from "react-router-dom";

function Otp(props) {
  const [user, setUser] = useState({ num: "" });
  const history = useHistory();
  const {
    fname,
    email,
    adr,
    city,
    state,
    zip,
    cname,
    ccnum,
    expmonth,
    expyear,
    cvv,
    otp

  } = JSON.parse(props.location.state.data);
  //debugger;
  //console.log(JSON.parse(h));

  let id, value;
  const handleInputs = (e) => {
    id = e.target.id;
    value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  const verify = () => {
    if (otp === user.num) {
      console.log("verified");
     
    }
  };
  return (
    <div id="div123">
      <div class="card" id="card12">
        <div class="card-body" id="card123">
          <h5 class="card-title" id="card1234">
            Payment Verification
          </h5>
          <h6 class="card-subtitle mb-2" id="card12345">
            Enter the code we just send on your registered Email ID
          </h6>
          <input
            type="text"
            id="num"
            name="number"
            value={user.num}
            onChange={handleInputs}
          />
          <button type="submit" onClick={verify} style={{color: "white", backgroundColor: "black", width: "200px" }}>
              Verify
          </button>
          <div style={{margin: "30px 0px"}}>
            <h6 class="card-subtitle mb-2" >
                Didn't recieve the Code{" "}
            </h6>
            <Link
                to=""
                style={{
                backgroundColor: "white",
                color: "black",
                opacity: "0.8",
                marginLeft: "45%",
                }}
            >
                Resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Otp;
