import '../styles/content.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import git from '../images/git.png'
import css from '../images/css.png'
import html from '../images/html.png'
import js from '../images/js.png'
import visual from '../images/visual.webp'
import react from '../images/react.png'
import node from '../images/node.png'
import github from '../images/github.png'

const contentA = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <div className='contentA'>
        
        <div >
          <p>Tecnologías con las que trabajo</p>
          <Carousel 
          className='carousel'
          responsive={responsive} >
            <div><img src={html} alt='html' /></div>
            <div><img src={css} alt='css' /></div>
            <div><img src={js} alt='js' /></div>
            <div><img src={node} alt='react' /></div>
            <div><img src={visual} alt='node' /></div>
            <div><img src={git} alt='mongo' /></div>
            <div><img src={react} alt='git' /></div>
            <div><img src={github} alt='github' /></div>
        
          </Carousel>
  
        </div>  

        <div className='cont-enido'>
          <div className='textoA'>
            
            <div className='textoA-imagen'>
                <svg className='mancha' width="774" height="682" viewBox="0 0 774 682" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M397.087 94.8119C398.12 94.7448 399.152 94.6341 400.194 94.4973C411.945 92.8729 487.579 84.9595 497.611 147.197C508.109 212.317 566.869 201.301 594.314 200.397C596.43 200.324 598.54 200.06 600.634 199.716C671.89 187.671 722.132 251.972 692.739 286.837C663.346 321.702 663.004 348.013 663.004 348.013C663.004 348.013 662.932 379.931 686.855 398.124C710.779 416.317 638.501 504.796 558.368 460.562C478.236 416.327 361.142 530.431 361.142 530.431C361.142 530.431 313.675 575.6 257.721 542.48C201.768 509.36 134.873 440.306 169.107 404.893C203.341 369.479 235.801 370.354 238.254 341.277C240.01 320.516 215.06 297.976 200.657 286.806C188.922 277.686 181.738 263.616 182.16 248.741C182.671 231.367 193.314 210.916 234.448 199.317C238.465 198.191 242.598 197.573 246.778 197.498C259.554 197.266 295.425 192.549 318.218 149.199C343.449 101.208 388.197 95.4807 397.087 94.8119Z" fill="#B85044"/>
                  <path d="M176.386 325.549C149.224 333.25 173.618 370.927 189.491 358.867C205.364 346.807 205.838 317.192 176.386 325.549Z" fill="#B85044"/>
                  <path d="M125.402 254.98C75.7714 263.45 107.956 328.115 142.965 311.515C177.974 294.916 159.003 249.258 125.402 254.98Z" fill="#B85044"/>
                  <path d="M100.227 339.76C97.8711 337.015 95.2241 334.519 92.0351 332.787C84.0842 328.501 70.5818 325.76 63.3817 350.167C52.7896 386.154 58.9942 401.069 58.9942 401.069C58.9942 401.069 64.5671 436.285 128.17 416.853C133.978 415.074 139.106 411.539 142.772 406.693C150.964 395.823 160.263 375.199 132.938 357.029C130.595 355.473 127.994 354.368 125.293 353.595C119.236 351.865 107.001 347.618 100.236 339.734L100.227 339.76Z" fill="#B85044"/>
                </svg>
                <img className='imgAlgo' src={html} alt='html' />
            </div>
            <div className='textoA-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tellus eu magna commodo tempus. Sed sit amet luctus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur fermentum orci ac ipsum euismod, id ullamcorper justo hendrerit. 
            </div>
          </div>
          <div className='textoA'>
            <div className='textoA-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tellus eu magna commodo tempus. Sed sit amet luctus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur fermentum orci ac ipsum euismod, id ullamcorper justo hendrerit. 
            </div>
            <div className='textoA-imagen'>
                <svg className='mancha' width="774" height="682" viewBox="0 0 774 682" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M397.087 94.8119C398.12 94.7448 399.152 94.6341 400.194 94.4973C411.945 92.8729 487.579 84.9595 497.611 147.197C508.109 212.317 566.869 201.301 594.314 200.397C596.43 200.324 598.54 200.06 600.634 199.716C671.89 187.671 722.132 251.972 692.739 286.837C663.346 321.702 663.004 348.013 663.004 348.013C663.004 348.013 662.932 379.931 686.855 398.124C710.779 416.317 638.501 504.796 558.368 460.562C478.236 416.327 361.142 530.431 361.142 530.431C361.142 530.431 313.675 575.6 257.721 542.48C201.768 509.36 134.873 440.306 169.107 404.893C203.341 369.479 235.801 370.354 238.254 341.277C240.01 320.516 215.06 297.976 200.657 286.806C188.922 277.686 181.738 263.616 182.16 248.741C182.671 231.367 193.314 210.916 234.448 199.317C238.465 198.191 242.598 197.573 246.778 197.498C259.554 197.266 295.425 192.549 318.218 149.199C343.449 101.208 388.197 95.4807 397.087 94.8119Z" fill="#B85044"/>
                  <path d="M176.386 325.549C149.224 333.25 173.618 370.927 189.491 358.867C205.364 346.807 205.838 317.192 176.386 325.549Z" fill="#B85044"/>
                  <path d="M125.402 254.98C75.7714 263.45 107.956 328.115 142.965 311.515C177.974 294.916 159.003 249.258 125.402 254.98Z" fill="#B85044"/>
                  <path d="M100.227 339.76C97.8711 337.015 95.2241 334.519 92.0351 332.787C84.0842 328.501 70.5818 325.76 63.3817 350.167C52.7896 386.154 58.9942 401.069 58.9942 401.069C58.9942 401.069 64.5671 436.285 128.17 416.853C133.978 415.074 139.106 411.539 142.772 406.693C150.964 395.823 160.263 375.199 132.938 357.029C130.595 355.473 127.994 354.368 125.293 353.595C119.236 351.865 107.001 347.618 100.236 339.734L100.227 339.76Z" fill="#B85044"/>
                </svg>
                <img className='imgAlgo' src={html} alt='html' />
            </div>
          </div>
        </div>
        
      </div>
     );
}

export default contentA