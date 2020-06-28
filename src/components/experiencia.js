import React from 'react';
import {FaDirections} from 'react-icons/fa'

export default function Experiencia() {

    return (
        <div className='card-corpo'>
            <h2 className='name-section'>Experiência</h2>
            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Empresa: Hospital Margarida</p>
                </div>
                <p className='descr-item-section'>Cargo/Setor: Estagiário - CPD</p>
                <p className='descr-item-section'>Período: 06/2018 - 06/2019</p>
                <p className='descr-item-section'>Atividades: Desenvolvimento e documentação de sistemas internos utilizando as tecnologias HTML5, CSS3, Javascript e PHP.</p>
            </div>

            <div className='item-section'>
                <div className='title'>
                    <FaDirections size={15} color='#34a1e5' />
                    <p className='title-item-section'>Empresa: Inforplay Informática</p>
                </div>
                <p className='descr-item-section'>Cargo/Setor: Técnico em Informática - Manutenção</p>
                <p className='descr-item-section'>Período: 01/2015 - 12/2015</p>
                <p className='descr-item-section'>Atividades: Montagem e manutenção de computadores, montagem de redes e atendimento a domicílio. Sistemas Windows XP, 7, 8, 10, Sever, Linux.</p>
            </div>        
        </div>
    )
}