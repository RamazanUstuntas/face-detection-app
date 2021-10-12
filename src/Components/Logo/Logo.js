import React from 'react';
import Tilt from 'react-tilt';
import gandalf from './gandalf.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner pa3">
         <img style={{paddingTop: '5px'}} alt='logo' src={gandalf}/> 
        </div> 
      </Tilt>
      <Tilt className="Tillt br2 mb3 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 150 }}>
        <div className='Tilt br2 shadow-2'>
          <p className='ba2 ma2'>"A WIZARD IS NEVER LATE, NOR IS HE EARLY. HE ARRIVES PRECISELY WHEN HE MEANS TO."</p>
        </div>
      </Tilt>
    </div>
  )
}


export default Logo;