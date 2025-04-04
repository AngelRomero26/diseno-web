import React from 'react'
import images from '../../assets/images'
import './Footer.css';

const footer = () => {
  return (
    <footer className='footer'>

        <div className='contFoot'>
          <img src={images.logo} alt=""  width={90} height={90}/>
          <ul className='ulf'>
            <h3>Information</h3>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
          <ul className='ulf'>
            <h3>Contacts</h3>
            <div className='conttext'>
              <img className='imgfoot' src={images.logo} alt="" />
              <div className="text1">
                <p>1234 Sample Street</p>
                <p>Austin Texas 78704</p>
              </div>
            </div>
            <div className='text1'>
              <img className='imgfoot' src={images.logo} alt="" />
              <p>512.333.2222</p>
            </div>
            <div className='text1'>
              <img className='imgfoot' src={images.logo} alt="" />
              <p>sampleemail@gmail.com</p>
            </div>
          </ul>
          <div className='ulf'>
            <h3>Social Media</h3>
            <div className="logos">
              <div className='logo'></div>
              <div className='logo'></div>
              <div className='logo'></div>
              <div className='logo'></div>
            </div>
          </div>
        </div>
        <div className='allrights'>
          <p>2021 All Rights Reserved</p> 
        </div>
    </footer>
  )
}

export default footer