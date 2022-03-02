import React, {useState, useEffect} from 'react'
import Data from "../womens.json";
import { sendData } from '../util';
import ShoppingKartItem from '../components/ShoppingKartItem';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Womens() {
   
  const [number, setNumber] = useState(0)
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
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

  })
  

  const AddtoCart = (detail) => {
      

    const axiosgetData = async () => {
            
      const d = await axios.get('http://localhost:5000/cart');
      
      if(send(detail)){
      setNumber(d.data.length+1)}
      
    }
    axiosgetData();


  }

  const send = (detail) => {
    const data = {
      "username": `${cookies.user}`,
      "image": `${detail.image}`,
      "title": `${detail.title}`,
      "price": `${detail.price}`
    }

    if(sendData(data))return true;
  }

    return (
        <div>
        <ShoppingKartItem num={number}/>
            <div class="container-fluid">
        <h1 id="h1" style={{marginTop:"30px",marginBottom:"50px"}}>Women's Collection</h1>
            <div class="row">
          {Data.map((detail) => {
            return (
              <div class="card" >
                  
                    <img
                      class="card-img-top img-thumbnail" 
                      src={detail.image}
                      style={{width:"60%"}}
                      alt=""
                    />
                 
                  <div class="card-body">
                    
                      <h5 class="card-title">{detail.title}</h5>
                    
                    <h6>{detail.price}</h6>
                    <div className="btn1">
                    <button id="btn1" style={{ marginRight: "3px", borderColor: "skyblue", backgroundColor: "transparent"}} onClick={() => {AddtoCart(detail)}}>
                      ADD TO CART
                    </button>
                  </div>
                  </div>
                </div>
            );
          })}
        </div>
        </div>
        </div>
    )
}

export default Womens