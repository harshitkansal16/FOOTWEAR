import React, { useEffect, useState } from "react";
import brandData from "../brand.json";
import { sendData } from "../util";
import axios from "axios";
import ShoppingCart from "./ShoppingKartItem";
import { useCookies } from 'react-cookie';

export default function SearchByBrand(props) {

  let[results, setResults] = useState(0);
  const [number, setNumber] = useState(0)
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    
     brandData.map((d) => {
        if(d.type === props.location.state.name){
           results++;
        }
        return ""
     })

     setResults(results);

     const axiosgetData = async () => {
              
      const d = await axios.get('http://localhost:5000/cart');      
      
      var n = 0;
      for(var i=0; i<d.data.length; i++){
          if(d.data[i].username === cookies.user){
             n++;
          }
      }
 
      setNumber(n)      
    }
    axiosgetData();

  }, [number])

  
  const send = (detail) => {
    const data = {
      "username": `${cookies.user}`,
      "image": `${detail.image}`,
      "title": `${detail.title}`,
      "price": `${detail.price}`
    }

    if(sendData(data))return true;
  }
  
  const AddtoCart = (detail) => {
        
  
    const axiosgetData = async () => {
            
      const d = await axios.get('http://localhost:5000/cart');
      
      if(send(detail)){
      setNumber(d.data.length+1)}
      
    }
    axiosgetData();

  }

  return (
    <div>
      
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1 style={{color: "hsl(120deg 4% 72%)", marginBottom: "20px", marginLeft: "30px"}}>#SEARCH for "{props.location.state.name}" has "7" results: </h1>
        <ShoppingCart num={number} />
      </div>
      <div class="row">
        {brandData.map((data) => {
          if (data.type === props.location.state.name) {
            return (
              <div class="col-sm-3 text-center">
                <div class="card" style={{ width: "18rem;" }}>
                  <img class="card-img-top" src={data.image} alt="" />

                  <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>

                    <h6>{data.price}</h6>

                    <button
                      id="btn1"
                      style={{
                        marginRight: "3px",
                        borderColor: "skyblue",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => {
                        AddtoCart(data);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return [];
        }
        
        )}
      </div>
    </div>
  );
}
