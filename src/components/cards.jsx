import React from 'react'

import '../styles/cards.css'

export default function Cards({imagen, semana, titulo, descripcion, boton}) {
  return (
    <div className='card'>
        <img className='imagen' src={imagen} alt="image" />
        <div className='card-details'>
            <p className='semana'>{ semana }</p>
            <p className='titulo'>{ titulo }</p>
            <p className='descripcion'>{ descripcion }</p>
        </div>
        <div className='card-button'>
            <a href={boton} className='botonn'>Ir a la página</a>
        </div>
    </div>
  )
}
