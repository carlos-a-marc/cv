import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Formacao from './formacao';
import Experiencia from './experiencia';
import Qualificacao from './qualificacao';

export default function Corpo() {

    const form = useSpring({
        to: { opacity: 1, marginLeft: 0 },
        from: { opacity: 0, marginLeft: -100 },
        delay: 1000,
        config: config.slow
    })

    const exp = useSpring({
        to: { opacity: 1, marginBottom: 0 },
        from: { opacity: 0, marginBottom: -200 },
        delay: 1000,
        config: {duration: 0}
    })

    const qual = useSpring({
        to: { opacity: 1, marginRight: 0 },
        from: { opacity: 0, marginRight: -100 },
        delay: 1000,
        config: config.slow
    })

    return (
        <div className='body-container'>
            <div className='body'>
                <animated.div className='container-form' style={form}>
                    <Formacao />
                </animated.div>
                <animated.div className='container-exper' style={exp}>
                    <Experiencia />
                </animated.div>
                <animated.div className='container-qual' style={qual}>
                    <Qualificacao />
                </animated.div>
            </div>
        </div>
    )
}