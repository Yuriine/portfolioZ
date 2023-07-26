import React from 'react'

import '../styles/cards.css'
import { Link } from 'react-router-dom'

export default function Cards1({imagen, semana, titulo, descripcion, boton}) {
  return (
    <div className='card'>
        <img className='imagen' src={imagen} alt="image" />
        <div className='card-details'>
            <p className='semana'>{ semana }</p>
            <p className='titulo'>{ titulo }</p>
            <p className='descripcion'>{ descripcion }</p>
        </div>
        <div className='card-button'>
            <Link to={boton} className='botonn'>Ir a la página</Link>
        </div>
    </div>
  )
}
