import React from 'react';
import '../assets/styles/passives.css';

function Passives() {
    return (
        <>
            <div className="passives">
                <div className="passive">
                    <p className="name positive">Tunes of Productivity</p>
                    <p className="details">Increases Florian's focus and productivity when listening to music</p>
                </div>

                <div className="passive">
                    <p className="name positive">Brew of Epiphany</p>
                    <p className="details">Florian is more likely to fix bugs after a cup of coffee</p>
                </div>

                <div className="passive">
                    <p className="name negative">Feline Fascination</p>
                    <p className="details">Reduces Florian's focus and productivity when a cat is nearby</p>
                </div>

                <div className="passive">
                    <p className="name negative">Easily stressed out</p>
                    <p className="details">Florian is quickly stressed and needs to be prepared in advance to be effective</p>
                </div>

                <div className="passive">
                    <p className="name"><i className="fas fa-lock"></i></p>
                    <p className="details">This content is locked, you can unlock it by giving Florian an interview <br /> (how dares he?)</p>
                </div>
                <div className="passive">
                    <p className="name"><i className="fas fa-lock"></i></p>
                    <p className="details">This content is locked, you can unlock it by giving Florian an interview <br /> (currently filling blank space)</p>
                </div>
                <div className="passive">
                    <p className="name"><i className="fas fa-lock"></i></p>
                    <p className="details">This content is locked, you can unlock it by giving Florian an interview <br /> (and it looks pretty neat)</p>
                </div>
            </div>
        </>
    );
};

export default Passives;