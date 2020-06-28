import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaGooglePlay } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';

export default function Trabalhos() {

    const trabalhos = useSpring({
        to: {opacity: 1}, 
        from: {opacity: 0},
        delay: 2000,
        config: config.slow
    })

    return (
        <div className='body-container'>
            <div className='body'>
                <div className='container-trab'>
                    <animated.div className='trabalho' style={trabalhos}>
                        <h2 className='name-section'>Trabalhos Publicados</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 30 }} className='itens-publi'>
                            <div className='item-section-trab'>
                                <DiAndroid size={60} color='#25ce66' />
                                <p className='title-item-section-trab'>Ufitness - Diário de Refeições e Contador Calórico</p>
                                <p className='descr-item-section-trab'>React Native, Realm</p>
                                <div className='icon-link-section-trab'>
                                    <FaGooglePlay size={14} color='#34a1e5' />
                                    <a href='https://play.google.com/store/apps/details?id=com.ufitness.too' target='_blanck' className='link-trab'>Google Play Store</a>
                                </div>
                            </div>
                            {/*<div className='item-section-trab next-publi'>
                                <IoMdAdd size={35} color='rgba(51, 51, 51, 0.3)' />
                            </div>
                            <div className='item-section-trab next-publi'>
                                <IoMdAdd size={35} color='rgba(51, 51, 51, 0.3)' />
                            </div>
                            <div className='item-section-trab next-publi'>
                                {/*<IoMdAdd size={35} color='rgba(51, 51, 51, 0.3)' />
                            </div>*/}
                        </div>
                    </animated.div>

                </div>
            </div>
        </div>
    )
}