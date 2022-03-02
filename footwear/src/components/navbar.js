import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import BrandList from './BrandList';
import "../App.css";

function Navbar(){

   const[name, setName] = useState("");
   const history = useHistory();

 

  const inputHandler = (e) => {
    e.preventDefault();

    let names = e.target.value;
    setName(names);

  }

  const passData = () => {
     const brandname =  name;
     if(brandname === "" ){
       window.alert("please enter some in search")
       return;
     }
     history.push("/searchByBrand", {"name": `${brandname}`});
  }

    return(
        <>
        <nav class="navbar" >
  <div class="container-fluid nav_1">
    <a class="navbar-brand"  id="nav1" href="./homepage">Footwear</a>
    <form class="d-flex" style={{display: "flex",width:"200px", flexDirection: "column"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <input className='formSearch' type="search" placeholder="Search By BrandName" aria-label="Search" value={name} onChange={inputHandler}/>
        <button class="btn btn-outline-primary" type="submit" onClick={passData}><i class="fas fa-search" ></i></button>
      </div>
      <div>
      {
        name !== ""? <BrandList item = {name}/> : <div></div>
      }
        
      </div>
    </form>
	
  </div>
  
</nav>
        </>
    )
}
export default Navbar;