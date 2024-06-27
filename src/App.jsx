import React, { useState } from 'react';
import './assets/styles/general.css';
import './assets/styles/reset.css';
import Backpack from './components/backpack';
import Passives from './components/passives';

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Backpack');
    // TODO: Allow to change background when clicking on the button_background button
    // const changeVariable = () => {
    //     document.getElementsByClassName('character')[0].style.backgroundImage = "url('../images/background/bg2.png')";
    //   };

    return (
        <div className="container">
            <p className='dev'> CURRENTLY IN DEVELOPMENT </p>
            <div className="content">
                <div className="title">
                    <p>Florian's Portfolio</p>
                </div>
                <div className="menu">
                    {/* <p><i className="fa-solid fa-arrow-left"></i></p> */}
                    <p
                        className={selectedMenu === 'Backpack' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Backpack')}>Backpack</p>

                    <p className={selectedMenu === 'Passives' ? 'active' : ''}
                        onClick={() => setSelectedMenu('Passives')}>Passives</p>
                    {/* <p><i className="fa-solid fa-arrow-right"></i></p> */}
                </div>
                <div className="character">
                    <div className="light"></div>
                    {/* <i 
                        className="fas fa-image button_background"
                        onClick={changeVariable}
                    ></i> */}
                </div>
                <div className="informations">
                    {selectedMenu === 'Backpack' && <Backpack />}
                    {selectedMenu === 'Passives' && <Passives />}
                </div>
            </div>
        </div>
    );
}

export default App;
