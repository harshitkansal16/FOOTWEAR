import React from 'react'
import {useHistory} from "react-router-dom";

function BrandList({item}) {

    const brands = ["adidas", "puma", "nike", "reebok", "redtape"]
    let length = item.length;
    const history = useHistory();

    const passData = (name) => {
        const brandname =  name;
        if(brandname === "" ){
          window.alert("please enter some in search")
          return;
        }
        history.push("/searchByBrand", {"name": `${brandname}`});
     }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {brands.map((b) => {
                if(b.substring(0, length) === item){
                    console.log(b)
                    return <div onClick={() => {passData(b)}} style={{border: "none", backgroundColor: "white", boxShadow: "1px 3px 1px #e0e5ea", width: "200px", marginTop: "5px", cursor: "pointer"}}><p style={{marginLeft: "12px"}}>{b}</p></div>
                }
                return ""
            })}
        </div>
    )
}

export default BrandList
