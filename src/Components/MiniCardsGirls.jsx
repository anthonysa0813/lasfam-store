import React from 'react';
import misions from '../styles/misions.css'
import kitty from '../images/niños/kitty.jfif'
import hellokity from '../images/niños/hellokity.jfif'
import masca_boys_2 from '../images/niños/masca_boys_2.jpg'

const MiniCards = () => {
    return(
      <>   
            
           <div className="container mt-4">
               <div className="row">
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src='https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/105050033_115444750212506_14424768347388573_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeEawtYlsOs7W1BeEmfBx-1LZ2zU-uho9vVnbNT66Gj29WZmd5GQUVVzo3KCpbvUHVM9fes0CnOafMT4R4z1EBu0&_nc_ohc=8YWCO6mSv1EAX_OorRA&_nc_ht=scontent.flim18-3.fna&oh=efaa842f04bebececf06249ae241ecee&oe=5F348A93' alt=""/>
                   </div>
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src='https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/105968578_115444666879181_8184203333457606547_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_eui2=AeGHgkUo21vd3acBs1wkryLr3mNjOzVC4LTeY2M7NULgtNFzL-V5ujAdHcQjFaLh9TymCv1SZKLkuGHSbyQm8upN&_nc_ohc=FTmUhcE1n0oAX8wmqhQ&_nc_ht=scontent.flim18-3.fna&oh=b9f16bb336eccf395a32b687fde8e7b7&oe=5F37C10C' alt=""/>
                   </div>
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/105911599_115444723545842_4432341486413812390_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeGP2B8wk3wvFlDXTDIKWdsAoQZLNTvxndihBks1O_Gd2IP2e703J5sb5BHJ9Gpi1tHaGVoWB6BMU1jUSmC82lv7&_nc_ohc=kO6zePbkRAkAX-ZwxF4&_nc_ht=scontent.flim18-1.fna&oh=3b2386ca133db1815c80c85bbf4ba865&oe=5F34BDE4' alt=""/>
                   </div>
               </div>
               <div className="row">
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src={kitty} alt=""/> 
                   </div>
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src={hellokity} alt=""/>
                   </div>
                   <div className="col col-sm-4 col-xs-3 col-12 minicard">
                       <img src={masca_boys_2} alt=""/>
                   </div>
               </div>
           </div>
                
      </>
    )
}



export default MiniCards;