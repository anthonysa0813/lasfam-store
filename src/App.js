import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Objects from './Components/Objects'
import Footer from './Components/Footer';
import MiniCards from './Components/MiniCards';
import MiniCardsBoy from './Components/MiniCardsBoy'
import MiniCardsGirls from './Components/MiniCardsGirls'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardAndinas from './Components/CardAndinas';


function App() {
  return (
  
    <>
  
  <Router>
    <Navbar />
    <Carousel />
    
   
    
    <Switch>
          
      <Route path="/Catalogo1" exact component={MiniCards} />
      <Route path="/Catalogo2" component={MiniCardsBoy} />
      <Route path="/Catalogo3" component={MiniCardsGirls} />
      <Route path="/nosotros" component={Objects} />
      
        
    </Switch>
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

    <Objects />
  </Router>
  <Footer />
    </>
  );
}

export default App;
 


/* 
<Navbar />
<Carousel />
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
<Objects />
<Footer />  */












{/* <MiniCards 
image1='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/83518619_107193471037634_4957655861613583722_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHyOMiFerznEN1FeLTDLtfDRmCOJz6AFoRGYI4nPoAWhDuRNsRoLZU6_mUQnZnBG0VStI6vwSM5GTt5ZAb0Ilbg&_nc_ht=scontent.flim18-1.fna&oh=bf94abc6ebaa0036ba1df84521484514&oe=5F361507'
image2='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/104492817_107193394370975_5773245875346177109_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeGGt3RAPoxb9qLGi7jaOAWunZsiyGgbfR6dmyLIaBt9Hgx6KfQZlbKi0PtUt9CJWeoBpfrsiaFkepBn9-fbFXmz&_nc_ht=scontent.flim18-1.fna&oh=a4f422c76fc146c1e89251d3ac1d3e34&oe=5F367DFA'
image3='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/104708693_107193331037648_7982310325890446482_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeH7yjWpQgZi_pMQfgiXhOystc5jfhMFcm21zmN-EwVybWo4jcF9KdF348LEjLrkEEkQkM2hQ5KSku9a5-E8-FZ0&_nc_ht=scontent.flim18-1.fna&oh=46040521b2c2f9353be497e5a20c5047&oe=5F34933E'
image4='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/104431511_107193507704297_8457141518416416954_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeFGQdTfr6tp_mFUxGCbApEBszd3n-zToQazN3ef7NOhBslTbA6URiKq8gFNkseH6S5ghhZND2NvOOo9foK9I236&_nc_ht=scontent.flim18-1.fna&oh=f5b64ef82adeb2bec78e3f88e799ba82&oe=5F371108'
image5='https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/104330517_107193581037623_1739232851465798440_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeElugeSKu_9sncmiBWvA8ZZxVLcSt4qWt3FUtxK3ipa3bBD-nrqFKayzGuQox2crgbCVGpiamD1ay4DTKa6SvLd&_nc_ht=scontent.flim18-1.fna&oh=b7b87973957d9fe28894ad4806c5e0f5&oe=5F33FCC0'
image6='https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-9/104227084_107193661037615_3082234646992472151_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeGGHhnWYTK9BRYBDhYgp_F3DDlxrIwbHMAMOXGsjBscwPh5Yj89g7KxI3a-9hVtC11MmsveftmRh3nOcp7xa6wT&_nc_ht=scontent.flim18-2.fna&oh=5e0ce2505ea7a8bc2af7dd92bdaaf687&oe=5F374FA7'

/> */}


{/* <Cards 
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
      /> */}