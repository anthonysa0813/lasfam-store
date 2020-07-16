import React from 'react'
import style from '../styles/style.css'
import main from '../images/main.jpg'
import main2 from '../images/main2.jpg'


const Carousel = () => {
   return (
    <>
        <main id="main" class="pb-4 mb-4">
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={main} className="d-block w-100" alt="cordillera de los andes" />
                <div className="carousel-caption d-none d-md-block">
                  
                  
                </div>
              </div>
              <div className="carousel-item">
                <img src={main2} className="d-block w-100" alt="un pueblo en el lago titicaca" />
                <div className="carousel-caption d-none d-md-block">
                 
                </div>
              </div>
              
              <div className="overlay">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-12  text-left  text-center">
                              
                              <p className="text-main">"Un espacio pensado en ti y tu familia"</p>
                                  <button type="button" className="btn btn-primary">Ir a facebook</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          </main>
    </>

   )
}


export default  Carousel