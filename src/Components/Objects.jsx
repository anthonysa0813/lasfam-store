import React from 'react';
import style from '../styles/misions.css';
import mision from '../images/mision.jpg';
import vision from '../images/vision.jpg'


const Objects = () => {
    return (
        <>
              <div className="container-fluid misions" id="#ours">
                    <div className="row ">
                        <div className="col-5 col-lg-5 col-sm-5 col-12 contenedor" >
                            <img src={mision} alt="" />
                        </div>
                        <div className="col-7 col-lg-7 col-sm-7 col-12 contenedor text-center">
                            <h1>Misión</h1>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. At corrupti fugiat rem 
                                saepe fuga optio itaque aperiam omnis, 
                                non eligendi repellendus veniam laboriosam? 
                                Aperiam quae ullam deleniti. Dicta, mollitia
                                 laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid misions_2" >
                    <div className="row ">
                        <div className="col-7 col-lg-7 col-sm-7 col-12 contenedor_2 text-center" >
                            <h1>Visión</h1>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. At corrupti fugiat rem 
                                saepe fuga optio itaque aperiam omnis, 
                                non eligendi repellendus veniam laboriosam? 
                                Aperiam quae ullam deleniti. Dicta, mollitia
                                 laborum.</p>
                        </div>
                        <div className="col-5 col-lg-5 col-sm-5 col-12 contenedor_2 " >
                            <img src={vision} alt=""  className="image_vis"/>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export  default Objects