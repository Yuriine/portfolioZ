
import React from 'react'
import '../styles/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-linea'>
        </div>
        <div className='footer-content'>
            <div className='footer-content__titulo'>
                <p className='a'>envianos tu</p>
                <p className='b'>idea</p>
            </div>
            <div className='footer-content__cuadros'>
                <div className='cuadro_uno'></div>
                <div className='cuadro_dos'></div>
                <div className='cuadro_tres'></div>
                <div className='cuadro_cuatro'></div>
                <div className='cuadro_cinco'></div>
                <div className='cuadro_seis'></div>
            </div>
            <div className='footer-content__text'>
            Tell us about yourself,your project or idea, andwhy it matters to you andeveryone else.
            </div>
        </div>
    </div>
  )
}
