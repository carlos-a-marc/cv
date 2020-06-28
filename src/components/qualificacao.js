import React from 'react';
import { FaDirections } from 'react-icons/fa'

export default function Qualificacao() {
    return (
        <div className='card-corpo'>
            <h2 className='name-section'>Qualificações</h2>
            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Inglês nível: Avançado</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Domínio na linguagem de programação Java</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Experiência em desenvolvimento PHP</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Experiência em desenvolvimento Web (HTML5, CSS3, JavaScript (ES6+))</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Frameworks e bibliotecas React, React-Native, Bootstrap e JQuery</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Experiência com o banco de dados MySQL e Realm</p>
                </div>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Metodologia ágil Kanban</p>
                </div>
            </div>
        </div>
    )
}