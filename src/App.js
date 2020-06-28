import React from 'react';
import Cabecalho from './components/cabecalho';
import Corpo from './components/corpo';
import Trabalhos from './components/trabalhos';
import Footer from './components/footer';
import './App.css';
import './style/style.css';

export default function App() {
  return (
    <div className="App">
      <div className='primeira-div'>
        <Cabecalho />
        <Corpo />
        <Trabalhos />
      </div>
      <div className='segunda-div'>
        <Footer />
      </div>
    </div>
  );
}
