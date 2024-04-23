import React from 'react'
import Img from '../Img/health_hero_icon.png'

const Ontop = () => {
  return (
    <>    
    
    <div className='Ontop'>
       
        <a href ="#"><div className='Signup'>Sign up</div></a>
        <a href ="#"><div className='Login'>Login</div></a>
        
     <div className='Hover'>
        
        <a href="#"><div className='About'>About us</div></a>
        <a href="#"><div className='Locations'> Locations</div></a>
        <a href="#"><div className='TDEE'>TDEE</div> </a>   
        <a href="#"><div className='Benchmark'>Benchmark</div></a>   
        <a href="#"><div className='Home'>Home</div></a>    
      </div>
      <div className = 'Image'><img height='300' width='300' src={Img}/></div>     
       

        
    </div>
    </>
  )
}

export default Ontop

