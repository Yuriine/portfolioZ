import React from 'react';
import Menu from '../components/menu';
import '../styles/clases.css';
import { useNavigate } from 'react-router-dom';
import Descripcion from '../components/descripcion';
import uno from '../images/1.png';
import dos from '../images/2.png';
import tres from '../images/3.png';
import cuatro from '../images/4.png';

import once from '../images/11.jpg';
import doce from '../images/12.jpg';
import trece from '../images/13.png';
import catorce from '../images/14.jpg';
import quince from '../images/15.png';
import dieciseis from '../images/16.png';
import diecisiete from '../images/17.jpg';
import dieciocho from '../images/r9.png';
import diecinueve from '../images/r10.png';
import veinte from '../images/r11.png';
import veintiuno from '../images/r12.png';
import veintidos from '../images/r13.png';
import veintitres from '../images/r14.png';
import veinticuatro from '../images/r15.jpg';

import Contacts from '../components/contacts';
import Cards from '../components/cards';
import Footer from '../components/footer';
import Cards1 from '../components/cards1';

const Clases = () => {

    const navigate = useNavigate();

    const showDescription = (e) => {
        
        const description = document.getElementById(`bola${e.target.id}`);
        description.style.visibility = 'hidden';
       
        
    }
    const hiddenDescription = (e) => {
        
        const description = document.getElementById(`bola${e.target.id}`);
        description.style.visibility = 'visible';
       
        
    }

    const redirectToPage = () => {
        navigate('x');
    }
  return (
    <div className='contenido-total'>
        <Menu />
        <div className='todo-clases'>
            
            <div className='contenido-cursos'>
                <div className='titulo-clases'> Cursos de asignación </div>
                <h4>Contenido de clases y descrición</h4>
                <div className='lista-clases'>
                    <ul>
                        <p className='lista-clases-titulos'>Tratamiento</p>
                        <li>Semana 1</li>
                        <li>Semana 2</li>
                        <li>Semana 3</li>
                        <li>Semana 4</li>
                        <li>Semana 5</li>
                        <li>Semana 6</li>
                        <li>Semana 7</li>
                        <li>Semana 8</li>
                
                    </ul>
                    <ul>
                        <p className='lista-clases-titulos'>Detalles de cada semana</p>
                        <li>Lenguajes de programación.</li>
                        <li>Algoritmos eficientes.</li>
                        <li>Depuración de código.</li>
                        <li>Estructuras de datos.</li>
                        <li>Pruebas y validación.</li>
                        <li>Patrones de diseño.</li>
                        <li>Excepciones y manejo.</li>
                        <li>Optimización de rendimiento.</li>
                
                    </ul>
                </div>
            </div>
            {/* <div className='bolas-bolas'>
                <div className='bola' id='bola_1' >
                Figma es una herramienta de diseño y prototipado colaborativa basada en la web. Se utiliza principalmente para crear interfaces de usuario, diseñar aplicaciones y sitios web, y colaborar con otros miembros del equipo en tiempo real.  </div>
                <div className='bola' id='bola_2'>
                
Emmet es una abreviatura de "Emmett", y se refiere a un conjunto de atajos y abreviaciones de código utilizados principalmente en editores de texto y entornos de desarrollo para acelerar y facilitar la escritura de código HTML y CSS. </div>
                <div className='bola' id='bola_3'>
                Aqui se aprendió sobre l movimiento mediante captura de acciones, en este caso el click, y con esto hacer que estos varien segun nosotros pidamos </div>
                <div className='bola' id='bola_4'>
                Se aprendió acerca de la creación de una API y manejarlo mediante fetch en este caso se vio la creacion de una lista de productos, de esta forma aprender a utilizar fetch </div>
                <div className='bola' id='bola_5'>
                Se replico una pagina mediante el uso de tailwind y bootstrap, haciendo que conzcamos tanto animaciones como diseño responsive y mas cosas  </div>
                <div className='bola' id='bola_6'>
                Se creo varios proyectos utilizando distintos tipos de motor como Vite, CRA, Next y Mixer, todos estos tienen distinots tipos de ventajas y desventajas
                 </div>
                <div className='bola' id='bola_7'>
                asdfaf a2q </div>
            </div> */}
            <div className='clases-banner'>
                <p className='clases-banner__text'>Puedes observar cada tema que se trato -_- y cosas así, ya sabes...</p>
                <div className='clases-banner__gato'>
                    <svg width="545" height="271" viewBox="0 0 545 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_157_24)">
                        <path d="M406.151 180.605C415.984 181.589 428.774 178.637 426.803 170.788C424.831 162.939 377.637 148.202 362.875 145.261C364.847 133.476 344.195 102.057 344.195 102.057C327.474 92.24 358.945 39.2185 358.945 39.2185C358.945 39.2185 370.749 9.76762 356 5.84329C341.25 1.91897 305.848 52.9721 305.848 52.9721C297.001 72.6061 295.153 64.782 295.153 64.782C285.443 54.0055 250.781 52.9721 241.921 51.0161C233.074 49.0478 255.685 40.215 255.685 40.215C255.685 40.215 302.891 35.3065 294.044 20.618C285.197 5.92941 241.921 18.6127 241.921 18.6127C267.49 9.77992 259.628 0.93481 259.628 0.93481C242.907 -7.898 193.741 49.0478 193.741 49.0478C187.839 43.1552 127.855 70.6501 127.855 70.6501C104.258 70.6501 101.301 54.9404 101.301 54.9404C75.732 17.6286 53.1085 26.4737 53.1085 26.4737C29.5116 64.7697 57.0393 129.564 57.0393 129.564C49.1778 151.166 51.137 175.709 51.137 175.709C6.88809 177.677 0 193.387 0 193.387C4.91654 209.096 30.485 211.065 30.485 211.065C9.83309 220.882 4.91654 243.468 4.91654 243.468C3.93077 257.209 29.4993 262.118 29.4993 262.118C146.523 276.843 139.647 259.178 139.647 259.178C142.592 245.436 67.8582 239.544 67.8582 239.544C153.411 233.651 143.664 267.801 143.664 267.801C172.264 274.457 285.197 269.979 288.142 262.13C285.197 236.604 332.39 228.755 332.39 228.755C332.39 228.755 284.198 249.373 296.126 262.13C308.042 274.9 344.195 262.13 344.195 262.13C419.915 257.222 430.697 211.077 392.424 184.566C394.433 180.642 408.122 184.566 408.122 184.566C408.122 184.566 396.318 179.658 406.151 180.642V180.605ZM177.994 181.589C177.994 181.589 171.13 188.441 151.563 190.668C162.653 209.121 153.953 214.337 147.866 216.502C130.615 222.653 122.889 211.163 124.454 191.898C118.515 191.443 115.964 190.188 109.162 188.454C109.162 188.454 106.217 186.485 110.148 185.514C110.148 185.514 150.466 193.362 175.049 178.637C175.049 178.637 179.965 177.653 177.994 181.577V181.589ZM235.033 229.702C223.228 230.686 215.367 217.917 215.367 218.901C215.367 219.885 210.45 229.702 201.603 230.686C192.756 231.67 195.701 226.762 195.701 226.762C208.491 226.762 210.45 220.869 212.422 214.977C214.393 209.084 211.436 200.251 211.436 200.251C211.436 200.251 211.436 199.267 205.891 195.613C200.346 191.96 205.891 189.45 205.891 189.45H225.2C229.131 189.45 228.145 192.39 228.145 192.39C226.173 198.283 216.34 199.267 216.34 199.267C218.312 206.144 218.312 214.977 218.312 214.977C223.228 224.794 233.061 224.794 235.033 226.836C237.005 228.878 235.033 229.702 235.033 229.702ZM316.655 173.741C303.421 178.44 298.196 180.839 290.803 182.069C295.153 189.819 295.732 209.133 273.552 206.673C261.427 205.332 263.263 183.963 264.927 180.839C253.874 179.695 252.284 176.705 250.768 175.709C247.823 173.741 250.177 173.741 250.177 173.741C298.763 184.542 311.738 171.772 315.669 171.772C319.6 171.772 316.655 173.741 316.655 173.741Z" fill="#74D2D0"/>
                        </g>
                        <g clipPath="url(#clip1_157_24)">
                        <path d="M506.71 170.37C506.54 170.34 506.37 170.31 506.19 170.3C476.61 168.72 415.56 172.16 414 210C413.98 210.45 414.05 210.9 414.21 211.32C420.57 228.37 443.4 260.69 460.03 234.08C460.03 234.08 460.03 234.08 460.03 234.07C460.54 233.35 460.8 232.48 460.69 231.59C459.99 225.83 457.73 204.81 461.39 199.31C461.39 199.31 458.21 228.61 466.19 231.72C472.01 232.85 479.36 238.96 486.6 229.81C486.6 229.81 486.96 207.13 489.8 202.87C489.8 202.87 485.75 224.71 492.75 230.09C549.59 267.27 567.87 182.48 506.71 170.37Z" fill="#74D2D0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_157_24">
                        <rect width="427" height="271" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1_157_24">
                        <rect width="130.79" height="74.21" fill="white" transform="translate(414 170)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>

        </div>
        <div className='clases-contenido'>
            <div className='lana'>
                <svg className='lana_lana' width="336" height="368" viewBox="0 0 336 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M275.819 229.52C275.508 230.956 275.146 232.38 274.888 233.829C274.087 238.113 271.812 238.954 267.921 237.246C254.634 231.383 242.471 223.696 231.29 214.457C197.89 186.854 182.082 149.972 175.697 108.199C174.947 103.307 174.728 98.351 174.237 93.4205C173.875 89.8876 175.568 88.8265 178.864 89.2665C184.564 90.017 188.558 91.6217 189.696 98.6486C194.388 127.623 204.961 154.269 223.237 177.497C235.892 193.596 251.04 206.873 269.033 216.76C270.635 217.64 272.135 219.193 274.539 218.365C274.823 214.482 272.859 212.153 269.64 210.238C228.149 185.469 204.974 148.277 196.275 101.366C195.939 99.5804 194.646 97.2639 196.326 95.8534C198.291 94.1969 200.346 96.1769 202.285 96.8498C209.42 99.3215 213.556 103.851 216.077 111.486C227.089 144.848 246.814 171.894 276.374 191.396C286.935 198.358 291.135 208.931 292.467 221.018C293.992 234.774 293.371 248.582 293.449 262.364C293.578 285.062 304.591 297.472 327.146 300.229C333.027 300.941 336.388 304.396 335.961 309.274C335.483 314.723 331.386 317.595 324.703 317.181C301.334 315.745 281.002 297.007 277.576 273.713C275.431 259.129 277.305 244.441 275.819 229.533V229.52Z" fill="#B85044"/>
                    <path d="M143.616 86.8594C148.347 86.2771 149.161 88.5805 149.303 92.5922C150.014 113.272 151.139 133.9 156.865 153.997C165.99 186.051 181.746 213.978 207.132 235.99C221.609 248.543 238.296 257.407 255.771 264.952C258.55 266.155 263.281 266.104 261.329 271.591C258.602 279.264 254.608 282.435 249.127 280.649C216.452 270.025 189.243 251.687 169.054 223.515C149.665 196.469 141.07 165.721 137.968 133.045C136.688 119.496 136.223 105.986 137.774 92.411C138.239 88.3347 139.919 86.5488 143.629 86.8465L143.616 86.8594Z" fill="#B85044"/>
                    <path d="M22.749 23.0479C37.6263 23.1903 47.8763 37.2441 43.2877 51.932C41.7883 56.7201 42.7578 59.8 45.6272 63.5917C56.1745 77.5032 66.4503 91.6217 76.5193 105.87C79.4664 110.037 83.2665 111.512 87.9068 112.107C99.6561 113.621 111.367 115.381 123.258 115.355C125.934 115.355 129.799 114.799 130.328 118.254C131.091 123.223 133.237 128.438 130.781 133.395C129.721 135.53 126.89 134.87 124.796 134.702C105.912 133.252 87.1571 130.833 68.596 126.989C65.8816 126.433 62.4822 126.226 64.8346 121.813C66.0884 119.458 64.4856 117.659 63.2448 115.951C52.4002 100.926 41.4652 85.9794 30.6724 70.9033C28.4362 67.7716 25.4892 67.6293 22.1544 67.5646C9.38396 67.2928 0 57.8201 0 45.3839C0 32.6889 9.95268 22.9314 22.749 23.0479Z" fill="#B85044"/>
                    <path d="M155.469 94.9863C155.598 91.3758 154.331 86.95 160.535 86.7042C166.3 86.4712 167.851 89.3829 168.239 94.4946C170.592 124.75 178.179 153.427 193.728 179.788C210.157 207.624 233.539 227.579 262.402 241.4C272.005 245.994 273.091 249.643 267.184 258.87C265.439 261.6 263.526 261.29 261.135 260.371C220.342 244.622 189.45 218.093 171.664 177.523C160.161 151.266 154.926 123.689 155.456 94.9734L155.469 94.9863Z" fill="#B85044"/>
                    <path d="M70.2634 301.316C71.6594 294.936 72.6805 288.077 74.684 281.516C85.5544 245.942 105.33 216.734 136.494 195.796C144.456 190.451 144.702 190.503 148.36 198.953C154.551 213.279 154.28 212.942 142.246 222.868C115.257 245.126 98.3507 273.829 89.5225 307.502C86.7952 317.906 86.7177 317.984 78.2256 311.306C74.9812 308.757 70.69 306.867 70.2505 301.329L70.2634 301.316Z" fill="#B85044"/>
                    <path d="M93.413 22.5044C93.4389 25.3255 93.4906 28.3149 91.9525 30.683C88.7469 35.6265 90.2075 39.7546 92.8702 44.3874C100.587 57.8201 108.019 71.4339 115.374 85.0736C117.48 88.9817 119.729 90.6899 124.551 89.4864C131.298 87.8041 132.267 89.0206 131.531 95.7369C130.044 109.338 130.044 109.545 116.33 108.898C108.407 108.522 100.522 107.345 92.6246 106.491C91.4096 106.361 89.7422 106.607 89.5225 104.899C89.3286 103.398 90.8279 102.867 91.8491 102.143C94.9383 99.9427 100.302 99.878 101.104 95.8792C102.021 91.324 98.0146 87.6359 95.8431 83.7407C89.5612 72.4562 83.0467 61.2882 76.8296 49.9779C74.9166 46.4839 72.758 44.6333 68.4409 44.2968C56.2262 43.3651 48.096 33.1418 48.9233 20.628C49.6859 9.11058 60.5951 -0.569207 72.1376 0.0260743C84.3264 0.660178 93.4001 10.2623 93.413 22.5044Z" fill="#B85044"/>
                    <path d="M248.106 291.313C247.537 294.561 249.941 297.071 251.583 299.724C258.046 310.154 264.664 320.494 271.243 330.847C273.44 334.315 274.759 337.809 272.044 341.627C268.218 347.01 261.652 346.687 257.684 340.553C251.247 330.614 244.888 320.611 238.955 310.374C236.305 305.793 234.483 304.616 229.907 308.472C221.286 315.719 221.208 315.344 226.327 325.412C231.303 335.195 235.943 345.147 240.609 355.085C243.104 360.378 241.669 365.037 237.145 367.172C232.763 369.256 228.071 367.301 225.59 362.099C220.394 351.216 215.172 340.346 210.273 329.333C208.192 324.648 205.878 323.212 200.928 325.709C196.158 328.116 190.91 329.579 185.831 331.352C184.486 331.818 182.767 332.594 181.695 331.041C180.854 329.825 181.901 328.569 182.586 327.508C194.323 309.352 209.136 294.276 227.477 282.772C230.54 280.856 245.56 284.48 247.977 287.353C248.985 288.556 248.765 289.708 248.119 291.313H248.106Z" fill="#B85044"/>
                    <path d="M93.3613 317.375C97.0321 302.506 101.31 287.87 108.51 274.205C119.225 253.861 133.818 236.87 151.824 222.661C156.205 219.206 159.437 218.145 162.306 224.11C163.314 226.207 165.098 227.928 166.404 229.908C172.634 239.264 173.926 236.909 164.775 244.441C139.842 264.952 123.801 291.17 113.745 321.452C111.186 329.164 111.082 329.203 103.443 325.748C101.091 324.687 98.7641 323.548 96.4246 322.461C94.266 321.452 92.9347 319.964 93.3483 317.375H93.3613Z" fill="#B85044"/>
                    <path d="M134.219 334.587C117.416 333.435 116.317 331.52 122.134 315.706C132.203 288.362 148.437 265.56 170.928 247.042C175.516 243.263 178.476 243.328 182.147 247.741C184.474 250.536 187.214 253.085 190.148 255.22C194.543 258.417 194.426 260.785 190.071 264.02C180.17 271.371 171.742 280.248 164.038 289.889C154.28 302.118 147.093 315.81 140.63 329.941C138.381 334.846 138.355 334.859 134.206 334.574L134.219 334.587Z" fill="#B85044"/>
                    <path d="M159.695 335.57C144.495 336.023 144.404 335.79 150.298 323.535C161.104 301.031 176.085 281.995 196.12 266.971C199.661 264.318 202.195 264.15 205.762 266.802C209.536 269.611 213.776 271.836 217.99 273.959C222.488 276.223 222.669 278.177 218.545 281.193C208.282 288.698 198.847 297.11 190.562 306.842C185.663 312.587 180.673 318.307 177.248 325.011C173.125 333.099 167.347 337.227 159.695 335.583V335.57Z" fill="#B85044"/>
                    <path d="M127.64 184.278C98.7126 183.165 70.2505 179.477 42.6285 170.212C36.812 168.258 35.5712 166.071 38.376 160.584C42.7449 152.043 42.4347 152.159 51.3533 154.411C75.8085 160.597 100.626 164.569 125.882 165.488C136.623 165.876 141.121 170.6 141.173 181.328C141.173 183.787 139.893 184.253 137.967 184.265C134.516 184.291 131.078 184.265 127.627 184.265L127.64 184.278Z" fill="#B85044"/>
                    <path d="M106.959 208.336C82.2712 205.954 58.178 200.687 34.731 192.651C26.575 189.856 31.4479 183.709 32.0425 179.011C32.7534 173.408 36.825 174.663 40.4312 175.906C66.864 185.068 94.2662 188.601 122.004 190.244C124.241 190.374 127.381 189.701 128.131 192.457C128.777 194.838 125.766 195.692 124.253 197.09C121.255 199.859 118.088 202.447 115.05 205.165C112.724 207.249 110.229 208.788 106.959 208.348V208.336Z" fill="#B85044"/>
                    <path d="M124.654 159.587C101.879 157.154 77.1268 155.718 53.2274 148.562C46.183 146.452 45.9374 145.818 49.8668 140.046C56.3554 130.522 56.3425 130.561 67.6394 133.045C86.6012 137.212 105.77 139.956 125.158 140.616C130.69 140.797 133.818 142.272 133.78 148.173C133.78 149.014 134.129 149.856 134.271 150.71C135.783 159.522 135.55 159.781 124.654 159.587Z" fill="#B85044"/>
                    <path d="M87.4802 230.788C68.7769 227.035 49.8151 224.033 32.0424 216.488C28.2423 214.884 26.2259 202.098 29.1859 199.212C31.1635 197.284 33.3221 198.824 35.2092 199.432C50.4097 204.22 65.7006 208.594 81.444 211.144C87.5965 212.14 93.7879 212.852 99.9663 213.654C103.469 214.107 104.813 215.285 102.034 218.507C99.501 221.432 97.071 224.46 94.7702 227.579C92.9089 230.102 90.634 231.267 87.4673 230.788H87.4802Z" fill="#B85044"/>
                    <path d="M75.7697 253.525C61.5128 251.028 47.5015 247.87 34.1881 242.228C31.3833 241.037 27.7124 227.333 29.0696 224.46C30.039 222.402 31.6289 223.269 32.9214 223.709C49.3886 229.352 66.2952 233.234 83.357 236.573C84.6495 236.818 85.9033 237.064 86.1747 238.682C86.485 240.558 79.3888 252.865 77.618 253.383C77.0234 253.551 76.3513 253.499 75.7826 253.538L75.7697 253.525Z" fill="#B85044"/>
                    <path d="M37.5101 250.277C45.1361 253.046 53.2534 255.104 61.4741 256.838C75.4337 259.788 75.2786 259.853 70.9614 273.493C68.945 279.847 67.562 286.408 65.8817 292.865C65.5068 294.315 65.3646 296.088 63.7877 296.657C61.7584 297.382 60.6856 295.596 59.574 294.354C49.2723 282.823 41.5299 269.714 35.791 255.389C34.0719 251.092 34.4596 250.238 37.5101 250.264V250.277Z" fill="#B85044"/>
                    <path d="M222.733 108.949C233.281 115.394 241.165 123.262 248.313 131.79C258.951 144.472 266.564 158.914 271.437 174.767C271.863 176.139 272.897 177.899 271.411 178.947C269.937 179.969 268.58 178.533 267.469 177.575C246.865 159.704 231.587 138.17 222.759 112.224C222.565 111.667 222.733 110.994 222.733 108.949Z" fill="#B85044"/>
                </svg>
                <p>Muchas cosas que descubrir y aprender, no te quedes con las ganas de aprender algo nuevo </p>
            </div>
        </div>
        <div className='contacts-clases'>
            <Contacts direction='row' position='relative' />
        </div>
        <h3>Clases</h3>
        <div className='clases-cards'>
            <Cards boton={'https://www.figma.com/file/GI6G7xxflEYTcJSDw4rCFB/PortfolioDesign?type=design&t=WgY9THzTW4zT9giB-0'} imagen={once} semana={'SEMANA 01'} titulo={'Tecnologías de desarrollo de Software'} descripcion={'Herramientas que te ayudan a desarrollar paginas web y todo lo ncesario que debes saber para empezar a hacerlo'} />
            <Cards boton={'/portfolioZ/src/pages/Semanas/semana2/index.html'} imagen={doce} semana={'SEMANA 02'} titulo={'HTML (HyperText Markup Language)'} descripcion={'Es el lenguaje estándar utilizado para crear y estructurar el contenido de páginas web. Se utiliza para definir la estructura y el significado de los elementos en un documento web.'} />
            <Cards boton={'/portfolioZ/src/pages/Semanas/semana3/index.html'} imagen={trece} semana={'SEMANA 03'} titulo={'Bootstrap'} descripcion={'Es un framework de diseño web front-end que proporciona un conjunto de estilos, componentes y scripts predefinidos.'} />
            <Cards boton={'/portfolioZ/src/pages/Semanas/semana4/index.html'} imagen={catorce} semana={'SEMANA 04'} titulo={'JavaScript'} descripcion={'Es un lenguaje de programación de alto nivel que se utiliza principalmente para agregar interactividad y comportamiento dinámico a las páginas web.'} />
            <Cards boton={'/portfolioZ/'} imagen={quince} semana={'SEMANA 05'} titulo={'API'} descripcion={'Conjuntos de reglas y protocolos que permiten la comunicación y la interacción entre diferentes componentes de software.'} />
            <Cards boton={''} imagen={dieciseis} semana={'SEMANA 06'} titulo={'React'} descripcion={'Es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. '} />
            <Cards boton={''} imagen={diecisiete} semana={'SEMANA 07'} titulo={'Vite, Remix y NextJs'} descripcion={'Estas son herramientas y frameworks populares utilizados para el desarrollo de aplicaciones web.'} /> 
            <Cards1 boton={'/portfolioZ/semana9'} imagen={dieciocho} semana={'SEMANA 09'} titulo={'Enrutamiento'} descripcion={'El enrutamiento es el proceso de determinar qué componente o página se debe mostrar en función de la URL actual del navegador.'} /> 
            <Cards1 boton={''} imagen={diecinueve} semana={'SEMANA 10'} titulo={'React Hooks CRUD'} descripcion={' CRUD se refiere a las operaciones básicas de creación (Create), lectura (Read), actualización (Update) y eliminación (Delete) de datos.'} /> 
            <Cards1 boton={''} imagen={veinte} semana={'SEMANA 11'} titulo={'Apche TomCat'} descripcion={'Apache Tomcat es un servidor web y contenedor de servlets y tecnologías JavaServer Pages (JSP)..'} /> 
            <Cards1 boton={''} imagen={veintiuno} semana={'SEMANA 12'} titulo={'IntellJ - Servlets'} descripcion={' IntelliJ es un entorno de desarrollo integrado (IDE) para Java y otras tecnologías.'} /> 
            <Cards1 boton={''} imagen={veintidos} semana={'SEMANA 13'} titulo={'Spring boot'} descripcion={' Spring Boot es un framework de Java que simplifica el desarrollo de aplicaciones basadas en Spring.'} /> 
            <Cards1 boton={''} imagen={veintitres} semana={'SEMANA 14'} titulo={'Spring Initializr'} descripcion={'Estas son herramientas y frameworks populares utilizados para el desarrollo de aplicaciones web.'} /> 
            <Cards1 boton={''} imagen={veinticuatro} semana={'SEMANA 15'} titulo={'Postman y Crud'} descripcion={'Spring Initializr es una herramienta en línea que permite generar rápidamente proyectos de Spring Boot personalizados.'} /> 
            <Cards1 boton={''} imagen={diecisiete} semana={'SEMANA 16'} titulo={'Vite, Remix y NextJs'} descripcion={'Estas son herramientas y frameworks populares utilizados para el desarrollo de aplicaciones web.'} /> 

        </div>
        <Footer />
    </div>
    
  );
};

export default Clases;

{/* <div className='pata'>
                        <svg width="203" height="168" viewBox="0 0 203 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M159.953 122.318C156.04 124.062 151.909 125.597 148.261 127.611C143.123 130.447 138.54 133.871 133.332 136.635C127.855 139.543 122.228 142.436 116.105 144.476C108.095 147.148 101.013 144.803 96.9457 138.076C88.4918 124.103 84.4908 109.715 88.2965 95.32C92.1775 80.6206 106.84 73.8503 126.532 77.0543C143.371 79.7979 158.184 86.3494 171.697 95.314C172.861 96.0911 173.919 96.9971 174.905 97.9285C179.478 102.255 180.26 106.733 176.484 110.814C174.03 113.472 170.863 115.732 167.731 117.91C165.356 119.556 162.509 120.789 159.882 122.208C159.913 122.248 159.941 122.274 159.972 122.315L159.953 122.318Z" fill="#070E18"/>
                        <path d="M72.4829 58.7872C68.2237 54.2371 65.9324 49.1737 65.6412 43.7376C65.3955 39.0818 67.5831 35.1673 73.1723 33.0081C78.9836 30.7634 84.7492 31.7724 89.6308 34.9262C99.2098 41.115 104.182 49.0692 103.608 58.4964C103.13 66.2974 94.7477 69.9525 85.1799 66.9098C80.3806 65.3869 75.9743 62.5619 72.4756 58.7959L72.4829 58.7872Z" fill="#070E18"/>
                        <path d="M76.4097 67.0106C102.291 106.139 13.1185 83.8509 36.3499 57.5486C48.516 48.1987 68.5289 57.5762 76.4097 67.0106Z" fill="#070E18"/>
                        <path d="M114.311 60.3022C110.533 56.3991 108.255 52.3552 108.147 47.7687C108.081 45.0734 108.96 42.5613 110.979 40.3947C115.225 35.8564 122.962 35.1255 128.922 39.0862C136.645 44.2166 140.764 50.7448 140.671 58.5224C140.658 59.5681 140.364 60.6317 139.979 61.6246C137.741 67.4192 130.49 69.6112 123.321 66.6941C119.473 65.1326 116.608 62.7586 114.307 60.2876L114.311 60.3022Z" fill="#070E18"/>
                        <path d="M73.9238 101.766C98.5753 142.902 -6.59234 93.6214 45.6006 89.6795C56.4781 88.8603 66.9167 93.2187 73.9238 101.766Z" fill="#070E18"/>
                        <path d="M152.827 118.568C148.914 120.312 144.783 121.848 141.135 123.861C135.997 126.697 131.414 130.122 126.206 132.885C120.729 135.794 115.102 138.686 108.979 140.726C100.969 143.398 93.8869 141.054 89.8195 134.326C81.3655 120.353 77.3646 105.965 81.1703 91.5706C85.0512 76.8712 99.7136 70.1009 119.406 73.3049C136.245 76.0485 151.058 82.6 164.57 91.5646C165.735 92.3417 166.792 93.2477 167.779 94.179C172.352 98.5051 173.134 102.983 169.358 107.064C166.904 109.723 163.737 111.982 160.605 114.161C158.23 115.806 155.383 117.039 152.756 118.458C152.787 118.499 152.814 118.525 152.846 118.565L152.827 118.568Z" fill="#74D2D0"/>
                        <path d="M65.3567 55.0378C61.0975 50.4877 58.8062 45.4243 58.515 39.9881C58.2693 35.3324 60.4569 31.4179 66.046 29.2587C71.8574 27.014 77.6229 28.023 82.5046 31.1767C92.0836 37.3656 97.056 45.3198 96.4814 54.747C96.0043 62.548 87.6214 66.2031 78.0536 63.1604C73.2544 61.6375 68.848 58.8125 65.3494 55.0465L65.3567 55.0378Z" fill="#74D2D0"/>
                        <path d="M69.2835 63.2612C95.1648 102.389 5.99223 80.1014 29.2237 53.7992C41.3898 44.4492 61.4027 53.8268 69.2835 63.2612Z" fill="#74D2D0"/>
                        <path d="M107.185 56.5528C103.407 52.6497 101.129 48.6058 101.02 44.0193C100.955 41.3239 101.833 38.8119 103.853 36.6453C108.098 32.107 115.836 31.376 121.795 35.3368C129.519 40.4672 133.638 46.9954 133.545 54.773C133.532 55.8187 133.237 56.8823 132.853 57.8752C130.615 63.6698 123.364 65.8618 116.195 62.9447C112.347 61.3832 109.482 59.0091 107.18 56.5382L107.185 56.5528Z" fill="#74D2D0"/>
                        <path d="M66.7976 98.0163C91.449 139.153 -13.7186 89.8719 38.4744 85.9301C49.3519 85.1109 59.7905 89.4693 66.7976 98.0163Z" fill="#74D2D0"/>
                        </svg>


                    </div>

                    <ul className='clases-ul'>
                        <a href='https://www.figma.com/file/GI6G7xxflEYTcJSDw4rCFB/PortfolioDesign?type=design&t=WgY9THzTW4zT9giB-0' id='_1'  onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 1 </a>
                        <a href='src\pages\Semanas\semana2\index.html' id='_2' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 2 </a>
                        <a href='src\pages\Semanas\semana3\index.html' id='_3' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 3 </a>
                        <a href='src\pages\Semanas\semana4\index.html' id='_4' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 4 </a>
                        <a href='' id='_5' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 5 </a>
                        <a href='' id='_6' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 6 </a>
                        <a href='' id='_7' onMouseEnter={hiddenDescription} onMouseLeave={showDescription} className='lista-clases__li'>Semana 7 </a>
                    
                    </ul> */}