import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./cart.css";
import lottie from "lottie-web";
import { useCookies } from 'react-cookie';
function Cart() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const container = useRef(null);
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    const axiosgetData = async () => {
      const d = await axios.get("http://localhost:5000/cart");
    
          for(var i=0; i<d.data.length; i++){
            if(d.data[i].username === cookies.user){
             setData(old => [...old, d.data[i]]);
            }
          }
            
            if (data.length === 0) {
              lottie.loadAnimation({
                container: container.current,
                loop: true,
                autoplay: true,
                animationData: require("../42176-empty-cart.json"),
              });
            }
            
    console.log(data)
    };
    axiosgetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  const deleteData = async (detail) => {
    const id = detail._id;
    console.log(id);
    axios.delete(`http://localhost:5000/cart/${id}`);

    const remainData = await axios.get("http://localhost:5000/cart");
    
    setData(remainData.data);
    console.log(remainData.data);
    window.location.reload();

  };

  const Payments = (detail) => {
    history.push({
      pathname: "/pay",
      state: {
        title: detail.title,
        image: detail.image,
        price: detail.price,
      },
    });
  };

  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>YOUR ITEMS</h1>

      {data.length !== 0 ? (
        <div>
          {data.map((detail) => {
            return (
              <div className="outer">
                <div>
                  <img src={detail.image} class="card-img-top1" alt="..." />
                </div>

                <div className="card-body">
                  <h5 class="card-title">{detail.title}</h5>
                  <h6>{detail.price}</h6>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px", marginRight: "10px" }}
                      onClick={() => {
                        Payments(detail);
                      }}
                    >
                      BUY
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ width: "100px", marginRight: "10px" }}
                      onClick={() => {
                        deleteData(detail);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            height: "auto",
            width: "70%",
            margin: "auto",
            marginTop: "25vh",
          }}
        >
          <div
            className="animation"
            ref={container}
            style={{ width: "50%" }}
          ></div>
          <button
            className="btn btn-primary mr-5"
            onClick={() => {
              history.push("/homepage");
            }}
          >
            ADD ITEMS
          </button>
        </div>
      ) }
    </div>
  );
}

export default Cart;
