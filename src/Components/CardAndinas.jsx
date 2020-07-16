import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cards from './Cards'
import {Link} from 'react-router-dom'



const CardAndinas = () => {
    return (
            <>
            <Router>
           <div className="container">
               <div className="row">
                   <div className="col">
                   <Cards 
          title="Mascarilla Andinas "
          descripcion_1="100% lavable y reutilizable pero que cague de risa"
          descripcion_2 ="Hechas a mano con algodón 100% peruano"
          precio ="20.00"
          image ="https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/83518619_107193471037634_4957655861613583722_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHyOMiFerznEN1FeLTDLtfDRmCOJz6AFoRGYI4nPoAWhDuRNsRoLZU6_mUQnZnBG0VStI6vwSM5GTt5ZAb0Ilbg&_nc_oc=AQkIXxCNUPcaZDiL3D80aRwISbAX3u3N2Uy0D6bN7VMxEO3dlp6G7qO_2ZU9tdn_8xI&_nc_ht=scontent.flim18-1.fna&oh=8f3e593bed4925beb5fadb5437db4e32&oe=5F361507"
        
       />
        <Cards 
        title="Mascarilla Boys"
        descripcion_1="100% lavable y reutilizable pero que cague de risa"
        descripcion_2 ="Hechas a mano con algodón 100% peruano"
        precio ="20.00"
        image ="https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/105597849_115444600212521_8011097770000164973_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHoKIt2vSIBA7zyOgkRf8Vr4mc1F4IrEBDiZzUXgisQEN23VIHik_NCYjegO6G_U_PA03WGmprnNck8tLA6t_yT&_nc_oc=AQkE2mGNp7gX5jZq9uC3jw0PQrm0XF5C6lAuMgwvVJNkIsdvMS2H0qoRHllBjWLKY-w&_nc_ht=scontent.flim18-1.fna&oh=b15f1dc09fca955d161b87b51185152c&oe=5F35F649"
      />
      <Cards 
        title="Mascarilla girls"
        descripcion_1="100% lavable y reutilizable pero que cague de risa"
        descripcion_2 ="Hechas a mano con algodón 100% peruano"
        precio ="20.00"
        image ="https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/105050033_115444750212506_14424768347388573_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeEawtYlsOs7W1BeEmfBx-1LZ2zU-uho9vVnbNT66Gj29WZmd5GQUVVzo3KCpbvUHVM9fes0CnOafMT4R4z1EBu0&_nc_oc=AQljhkGSvLnP_el_mUGn9fR0VsoJhk08AhWIi6L1OZVQrYIeNGP7ANoNuYtrry630X0&_nc_ht=scontent.flim18-3.fna&oh=e1de2fb6c8b5fe0370637a4fd8b246b0&oe=5F348A93"
      />
      <Cards 
        title="Mascarilla de color Entero"
        descripcion_1="100% lavable y reutilizable pero que cague de risa"
        descripcion_2 ="Hechas a mano con algodón 100% peruano"
        precio ="20.00"
        image ="https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/104398597_111137113976603_2521798062020580998_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeFkrd7fanw3Iel5xMPgrVpMxbEcaDOjD9bFsRxoM6MP1gp8rHzu5XlKZb7Xc7kZ_j7kATJLOQiHnms3NOu-8msS&_nc_oc=AQlJx-XtZTUAJSpSnOuzsH83K_WH1X_zNZGh1EhbXi8fwHDOwCFAIaDB5Jn10S__5g0&_nc_ht=scontent.flim18-1.fna&oh=649d02bccf5296088d00e1f55d2704b8&oe=5F33BDC6"
      />
                   </div>
               </div>
           </div>
      </Router>
            </>
    )
}


export default CardAndinas