import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import CardAndinas  from './CardAndinas'


const Cards = props => {
    
    return (
        <>
        
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                    <div className="card mb-3" >
                      <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Descripción: {props.descripción_1}</p>
                        <p>- {props.descripcion_2}</p>
                        <p>- No tóxico</p>
                        <h4>Precio: s/ {props.precio} X unidad</h4>
                        <button type="button" className="btn btn-success ml-4">Ir a whatsapp para cotizar</button>
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Cards;