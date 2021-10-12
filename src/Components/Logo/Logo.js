import React from 'react';
import Tilt from 'react-tilt';
import gandalf from './gandalf.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className='ma2 mt0 flex'>
      <div className='ma3 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
          <div className="Tilt-inner pa3">
           <img style={{paddingTop: '5px'}} alt='logo' src={gandalf}/> 
          </div> 
        </Tilt>
      </div>
      <div className='mr5 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 'auto', width: 200 }}>
          <div className='Tilt br2 shadow-2'>
            <p className='ma2'>"A WIZARD IS NEVER LATE, NOR IS HE EARLY. HE ARRIVES PRECISELY WHEN HE MEANS TO."</p>
          </div>
        </Tilt>
      </div>
    </div>
  )
}


export default Logo;