import React from 'react';
import './PageOne.css';
import images from '../../assets/images';

const PageOne = () => {
  return (
    
    <div className='container'>
        <div className="cont">
            <div className='izq'>
                <h1>PROJECT</h1>
                <h2><strong>Lorum</strong></h2>
                <div className="contenf">
                    <div className='flei'>←</div>
                    <div className='fled'>→</div>
                    <div className='linea'></div>
                </div>
                <div className="contenedor3">
                    <div className='contenNum'>
                        <div className='nums'>0</div>
                        <div className='nums'>1</div>
                    </div>
                    <div className='linea2'></div>
                    <div className='nums'>02</div>
                </div>
            </div>
            <div className='der'>
                <div>
                    <img src={images.img1} alt="" className='imgPri'/>
                    <div className='textD'><p>VIEW PROJECT</p>→</div>
                </div>

            </div>
        </div>
        {/* 2 seccion */}
        <div className="cont2">
            <div className='contenedor2'>
                <div className="izq2">    
                    <img src={images.img2} alt="" width={270} height={265} className='img1'/>
                    <img src={images.img4} alt="" width={270} height={140} className='img2'/>
                    <img src={images.img3} alt="" width={270} height={375} className='img3'/>
                </div>
                <div className="der2">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className='textButton'><p>READ MORE</p>→</div>
                </div>
            </div>
        </div>
        {/* seccion 3 */}
        <div className='cont3'>
            <h1 className='tittle'>Main Focus/Mission Statement</h1>
            <div className='contenedor4'>
                <div className="izq3">
                    <h1>1</h1>
                    <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </div>
                <div className="der3">
                    <h1>2</h1>
                    <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </div>
            </div>
        </div>
        {/* seccion 4 */}
        <div className='cont4'>
            <h1>Our Projects</h1>
            <div className='contimg'>
                <img src={images.img10} alt="" className='img4'/>
                <img src={images.img6} alt="" className='img5'/>
                <img src={images.img7} alt="" className='img6'/>
                <img src={images.img8} alt="" className='img7'/>
                <img src={images.img9} alt="" className='img4'/>
            </div>
            <div className='textButton2'><p>ALL PROJECTS</p>→</div>
        </div>
        {/* seccion 5 */}
        <div className='cont5'>  
            <h1>Contact Us</h1>
            <div className="contenedorID">        
                <div className='izq4'>
                    <div className='inputs'>
                        <input  className="input" type="text" placeholder='name' />
                        <input type="number" className="input" placeholder='number*'/>
                        <input type="email" className="input" placeholder='email*'/>
                        <input type="text" className="input"placeholder='Interested In'/>
                        <input type="text" className="message" placeholder='Message*'/>
                    </div>
                </div>
                <div className="der4">
                    <img src={images.img11} alt="" />
                </div>
            </div>  
            <div className='textButton3'><p>SEND EMAIL</p>→</div>
        </div>
    </div>
  )
}

export default PageOne