import React, { useRef, useState } from 'react';
import './assets/styles/general.css';
import './assets/styles/reset.css';
import Backpack from './components/backpack';
import Passives from './components/passives';
import Skills from './components/skills';
import Parcours from './components/parcours';
import About from './components/about';

function App() {
    const [selectedMenu, setSelectedMenu] = useState('About');
    const [entranceDone, setEntranceDone] = useState(false);
    const backgroundRef = useRef(null);

    const handleBackgroundMouseMove = (event) => {
        if (!entranceDone || !backgroundRef.current) return;

        const rect = backgroundRef.current.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width;
        const relY = (event.clientY - rect.top) / rect.height;

        const amplitude = 100;
        const offsetX = 50 + (relX - 0.5) * amplitude;
        const offsetY = 50 + (relY - 0.5) * amplitude;

        backgroundRef.current.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
    };

    const handleBackgroundMouseLeave = () => {
        if (backgroundRef.current) {
            backgroundRef.current.style.backgroundPosition = '50% 50%';
        }
    };

    return (
        <div className="container">
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
                <div
                    className={`character${entranceDone ? ' entrance-done' : ''}`}
                    ref={backgroundRef}
                    onAnimationEnd={() => setEntranceDone(true)}
                    onMouseMove={handleBackgroundMouseMove}
                    onMouseLeave={handleBackgroundMouseLeave}
                >
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
