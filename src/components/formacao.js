import React from 'react';
import {FaDirections} from 'react-icons/fa'

export default function Formacao() {
    return (
        <div className='card-corpo'>
            <h2 className='name-section'>Formação</h2>
            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Bacharelado: Sistemas de Informação</p>
                </div>
                <p className='descr-item-section'>Instituição: UFOP - Universidade Federal de Ouro Preto</p>
                <p className='descr-item-section'>Conclusão: 06/2020</p>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Curso: Técnico em Informática</p>
                </div>
                <p className='descr-item-section'>Instituição: CESE - Centro Educacional Santa Edwiges</p>
                <p className='descr-item-section'>Conclusão: 03/2013</p>
            </div>        
        </div>
    )
}