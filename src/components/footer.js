import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import {FaReact} from 'react-icons/fa';

export default function Footer(){

    const foot = useSpring({
        to: { opacity: 1, marginBottom: 0 },
        from: { opacity: 0, marginBottom: -300 },
        delay: 500,
        config: config.slow
    })

    return (
        <div className='footer-container'>
            <animated.div className='footer-content' style={foot}>
                <p>Desenvolvido em ReactJS</p>
                <FaReact size={15} color='rgb(78, 78, 78)' />
            </animated.div>
        </div>
    )
}