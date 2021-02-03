import React from 'react';

import './styles/global.css'
import './styles/pages/landing.css'

import { FaArrowRight} from 'react-icons/fa'

import LogoImg from './images/logo.svg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="page-landing">

          <div className="content-wrapper">
            <img src={LogoImg} alt="Happy"/>

            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
              <strong>Maringá</strong>
              <span>Paraná</span>
            </div>

            <a href="" className="enter-app">
              <FaArrowRight size={26} color="rgba(0,0,0,.6)" ></FaArrowRight>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
