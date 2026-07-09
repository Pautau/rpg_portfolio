import React, { useState } from 'react';
import './assets/styles/general.css';
import './assets/styles/reset.css';
import Backpack from './components/backpack';
import Passives from './components/passives';
import Skills from './components/skills';
import Parcours from './components/parcours';
import About from './components/about';

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Backpack');

    return (
        <div className="container">
            <p className='dev'> CURRENTLY IN DEVELOPMENT </p>
            <div className="content">
                <div className="title">
                    <p>Florian's Portfolio</p>
                </div>
                <div className="menu">
                    <p
                        className={selectedMenu === 'About' ? 'active' : ''}
                        onClick={() => setSelectedMenu('About')}>À propos</p>
                    <p
                        className={selectedMenu === 'Skills' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Skills')}>Compétences</p>
                    <p
                        className={selectedMenu === 'Parcours' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Parcours')}>Parcours</p>
                    <p
                        className={selectedMenu === 'Backpack' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Backpack')}>Inventaire</p>

                    {/* <p className={selectedMenu === 'Passives' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Passives')}>Passives</p> */}
                </div>
                <div className="character">
                    <div className="light"></div>
                </div>
                <div className="informations">

                    {selectedMenu === 'Skills' && <Skills />}
                    {selectedMenu === 'Parcours' && <Parcours />}
                    {selectedMenu === 'Backpack' && <Backpack />}
                    {selectedMenu === 'About' && <About />}
                    {/* {selectedMenu === 'Passives' && <Passives />} */}

                </div>
            </div>
        </div>
    );
}

export default App;
