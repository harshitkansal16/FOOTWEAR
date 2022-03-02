import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/ximg_bg_1.jpg.pagespeed.ic.QhDRNBaLHj.webp"
              class="d-block w-100" id="img123"
              alt="..."
            />
            <div class="carousel-caption d-lg-block d-md-block d-sm-block">
              <h5>
                NEW ARRIVAL UP TO 30% OFF New stylish shoes for men
              </h5>
              <p>New trending shoes</p>
              <div className="btn123">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
               
              >
                Shop Collection
              </button>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/ximg_bg_2.jpg.pagespeed.ic.SKeLmW7mPc.webp"
              class="d-block w-100" id="img123"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <div className="text1">
              <h5>
                NEW ARRIVAL UP TO 30% OFF New stylish shoes for men
              </h5>
              <p >New trending shoes</p>
              </div>
              <div className="btn123">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                
              >
                Shop Collection
              </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/ximg_bg_3.jpg.pagespeed.ic.cgrSKsbt8K.webp"
              class="d-block w-100" id="img123"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h5>
                NEW ARRIVAL UP TO 30% OFF New stylish shoes for men
              </h5>
              <p>New trending shoes</p>
              <div className="btn123">
              <button
                type="button"
                class="btn btn-secondary"
  
              >
                Shop Collection
              </button>
              </div>
            </div>
            
          </div>
          <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> 
        </div>
        
      </div>
    </>
  );
}
export default Carousel;
