import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import "../App.css";
import {useHistory} from 'react-router-dom';
import { useCookies } from 'react-cookie';


function ShoppingKartItem({num}) {
   
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);

    return (
      
      <div style={{display: "flex",columnGap:"5px", flexDirection: "row", float: "right",marginLeft:"15px", marginTop:"25px"}}>
         <div style={{display:"flex" , marginLeft: "15px"}}  onClick={() => {history.push("/cart")}}>
              <ShoppingCartIcon style={{height: "40px", width: "40px", color: "#595959"}}/> 
              <div>{num}</div>  
            </div>

          <div  onClick={() => {setCookie('user', null); history.push("/signin")}}>
              <LogoutIcon style={{height: "40px", width: "40px"}} className='iconlog' />
          </div>
    </div>
       
    )
}

export default ShoppingKartItem
