import React from 'react'
import uno from '../images/98.png'
import dos from '../images/99.jpg'

const semana9 = () => {
  return (
    <div>
        <div>
            <div>
                <h2>Enrutamiento</h2>
                <p> El enrutamiento es el proceso de determinar qué componente o página se debe mostrar en función de la URL actual del navegador.</p>
            </div>    
            <img src={uno} alt="" />

        </div>
        <div>
            <span>¿De qué trata este tema?</span>
            <p>En una aplicación web, el enrutamiento se utiliza para controlar la navegación y la presentación de contenido en función de la URL. Cuando el usuario navega a una URL específica, el sistema de enrutamiento determina qué componente o página se debe mostrar en función de la correspondencia entre la URL y las rutas definidas en la aplicación. El enrutamiento permite la creación de aplicaciones de página única (SPA) y aplicaciones de varias páginas, lo que brinda a los usuarios una experiencia de usuario más fluida y organizada al interactuar con la aplicación.</p>
        </div>
        <img src={dos} alt="" />
        <p></p>

    </div>
  )
}

export default semana9