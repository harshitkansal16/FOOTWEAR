import React from "react";
import { useHistory } from "react-router";

function Collection({num}) {
   const history = useHistory()

  return (
    <div>
      <h1 id="h11">"Create quality, well-designed </h1>
      <h1 id="h11">products that I wanted myself."</h1>
      <div class="row">
        <div class="col-md-6 text-center" onClick= {() => {history.push("/menscollection")}}>
            
              <img src="https://preview.colorlib.com/theme/footwear/images/xmen.jpg.pagespeed.ic.cgrSKsbt8K.webp" alt=""/>
         
        
           
              <h2 id="h2">Shop Men's Collection</h2>
        </div>
        <div class="col-md-6 text-center" onClick= {() => {history.push("/womenscollection")}}>
         
           
              <img src="https://preview.colorlib.com/theme/footwear/images/xwomen.jpg.pagespeed.ic.Qa_NAe_j0T.webp" alt=""/>
           
              <h2 id="h2">Shop Women's Collection</h2>
           
          
        </div>
      </div>
    </div>
  );
}
export default Collection;
