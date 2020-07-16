import React from 'react'
import misions from '../styles/misions.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faFontAwesome, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
        <footer>
                    <div className="container-fluid footer">
                      <div className="row">
                        <div className="col col-lg-6 col-sm-6 col-12 text-center footer-name">
                            <h2>Lasfam </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Quod est ipsa et officiis enim animi fugit distinctio. 
                               </p>
                        </div>
                        
                        <div className="col col-lg-6 col-sm-6 col-12 icons-social  text-center">
                  
                          
                         
                         <span ><a href="https://www.facebook.com/LASfamStore/" target="_blank" ><FontAwesomeIcon icon={faFacebook} /></a></span>
                         <span ><a href="https://www.facebook.com/LASfamStore/" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} /></a></span>
                         <span ><a href="https://www.facebook.com/LASfamStore/" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a></span>
                      </div>
                     
                        
                      </div>
                      <div className="row mt-4 text-center">
                        <div className="col col-lg-6 col-sm-6 col-12">
                            
                            <span>lasfam@gmail.com</span> <br></br>
                            <span>Lasfam group. Todos los derecho reservados.</span>
                        </div>
                        <div className="col col-lg-6 col-sm-6 col-12 mt-4 text-center pb-4">
                          <span>Política  de cookies | Protección de datos | Aviso legal | diseñado por <strong>Anthony S.</strong></span>
            
                        </div>
                      </div>
                    </div>    
              </footer>  
        </>

    )
}

export default Footer;