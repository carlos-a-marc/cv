import React from 'react';
import foto from '../img/me.jpg';
import { useSpring, animated, config } from 'react-spring'
import { MdLocationOn, MdMailOutline, MdSmartphone } from 'react-icons/md';
import { FaLinkedin, FaFilePdf } from 'react-icons/fa';

export default function Cabecalho() {

    const header = useSpring({
        to: {opacity: 1, marginTop: 0}, 
        from: {opacity: 0, marginTop: -300},
        config: config.slow
    })

    return (
        <div className='header-container'>
                  
            <animated.div  className='head' style={header}>
                <h1 className='name'>Carlos Alberto Marçal</h1>
                <div className='container-foto'>
                    <img src={foto} alt='Foto cv' className='foto' />
                </div>
                <div className='container-location'>
                    <MdLocationOn size={16} color='#34a1e5' />
                    <p className='location'>João Monlevade - MG</p>
                </div>

                <div className='container-mail'>
                    <MdMailOutline size={16} color='#34a1e5' />
                    <p className='mail'>carlos.alberto.marc@gmail.com</p>
                </div>

                <div className='container-phone'>
                    <MdSmartphone size={16} color='#34a1e5' />
                    <p className='phone'>31 98573-5418</p>
                </div>
                <div className='icon-link'>
                    <FaLinkedin size={14} color='rgb(188, 188, 188)' />
                    <a href='https://www.linkedin.com/in/carlos-alberto-marc' target='_blanck' className='linkdin'>Linkedin</a>

                    <FaFilePdf size={14} color='rgb(188, 188, 188)' />
                    <a href='https://drive.google.com/file/d/1cFUKma4a5mb1uwXSVSEnyhrpF7N3niyS/view?usp=sharing' target='_blanck' className='linkpdf'>CV em PDF</a>
                </div>

            </animated.div >
        </div>
    )
}