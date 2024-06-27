import React, { useState } from 'react';
import './assets/styles/general.css';
import './assets/styles/reset.css';
import Backpack from './components/backpack';
import Passives from './components/passives';
// import OtherComponent from './components/OtherComponent'; // Importez votre troisième composant

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Backpack');

    return (
        <div className="container">
            <div className="content">
                <div className="title">
                    Florian's Portfolio
                </div>
                <div className="menu">
                    {/* <p><i className="fa-solid fa-arrow-left"></i></p> */}
                    <p onClick={() => setSelectedMenu('Backpack')}>Backpack</p>
                    <p onClick={() => setSelectedMenu('Passives')}>Passives</p>
                    {/* <p onClick={() => setSelectedMenu('Other')}>Other</p> Ajoutez une nouvelle option de menu */}
                    {/* <p><i className="fa-solid fa-arrow-right"></i></p> */}
                </div>
                <div className="character">
                    <div className="light"></div>
                </div>
                <div className="informations">
                    {selectedMenu === 'Backpack' && <Backpack />}
                    {selectedMenu === 'Passives' && <Passives />}
                    {/* {selectedMenu === 'Other' && <OtherComponent />} Conditionnellement rendre le troisième composant */}
                </div>
            </div>
        </div>
    );
}

export default App;
