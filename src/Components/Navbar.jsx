import React from 'react';
import style from '../styles/style.css';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
        <div className="container-fluid position-fixed menup" >
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <a className="navbar-brand" href="/">
                            <img src="https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/104147461_102856534804661_8866006646436700710_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeEgScO_487jfsz5b3RlIywbimYbqg06ruuKZhuqDTqu6xjTUkqm2EdL8UJ9ZM8G2ElNOEx8XnH8eUPJYYoq6R4e&_nc_oc=AQn8s-9DelQWcOxbqaBj40B4b8A41OJz9hlmUyruuDazxl4KBOybXSRbpvmFv4pM7bo&_nc_ht=scontent.flim18-3.fna&oh=138d8969965d1e8735e3c783dd3f98ee&oe=5F33BAB5" alt="Logo de lasfam" className="logo" to='/' />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                      
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <Link  className="nav-link" to='/catalogo1'>Catálogo-Andino<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                              <Link  className="nav-link" to='/catalogo2'>Catálogo-Boys <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                              <Link  className="nav-link" to='/catalogo3'>Catálogo-Girls <span className="sr-only">(current)</span></Link>
                            </li>
                            
                          </ul>
                          
                        </div>
                      </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export  default Navbar