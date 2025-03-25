import React from 'react'
import './Navbar.css'
import images from '../../assets/images'


const Navbar = () => {
  return (
    <header className='header'>

        <img src={images.logo} alt='logo' className='logo'></img>
        

        <nav className='navbar'>
            <a href="#" className='mainLink'>MAIN</a>
            <a href="#">GALLERY</a>
            <a href="#">PROJECTS</a>
            <a href="#">CERTIFICATIONS</a>
            <a href="#" className='aDer'>CONTACTS</a>
        </nav>
    </header>
  )
}

export default Navbar

