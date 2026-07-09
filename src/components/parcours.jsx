import React, { useState } from 'react';
import '../assets/styles/parcours.css';
import { parcours } from '../data/parcours.js';

function Parcours() {
    const [openStep, setOpenStep] = useState(null);

    return (
        <div className="parcours">
            {parcours.map((step, index) => (
                <div className={`parcours-step ${step.status}`} key={index}>
                    <div className="parcours-node">
                        <i className={step.status === 'completed' ? 'fas fa-check' : 'fas fa-hourglass-half'}></i>
                    </div>
                    <div className="parcours-content">
                        <span className="parcours-date">{step.date}</span>
                        <p className="parcours-title">{step.title}</p>
                        <p className="parcours-desc">{step.description}</p>
                        <div className="parcours-footer">
                            {step.status === 'ongoing' && <span className="parcours-badge">En cours</span>}
                            {step.info && (
                                <button
                                    className="parcours-info-btn"
                                    onClick={() => setOpenStep(index)}
                                >
                                    <i className="fas fa-circle-info"></i> En savoir plus
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {openStep !== null && (
                <div className="parcours-modal-overlay" onClick={() => setOpenStep(null)}>
                    <div className="parcours-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="parcours-modal-close" onClick={() => setOpenStep(null)}>
                            <i className="fas fa-xmark"></i>
                        </button>
                        <p className="parcours-modal-title">{parcours[openStep].title}</p>

                        {typeof parcours[openStep].info === 'string' ? (
                            <p className="parcours-modal-text">{parcours[openStep].info}</p>
                        ) : (
                            <>
                                <p className="parcours-modal-intro">{parcours[openStep].info.intro}</p>

                                <div className="parcours-modal-features">
                                    {parcours[openStep].info.features.map((feature, i) => (
                                        <div className="parcours-feature" key={i}>
                                            <div className="parcours-feature-icon">
                                                <i className={feature.icon}></i>
                                            </div>
                                            <div className="parcours-feature-text">
                                                <p className="parcours-feature-title">{feature.title}</p>
                                                <p className="parcours-feature-desc">{feature.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {parcours[openStep].info.stack && (
                                    <div className="parcours-modal-stack">
                                        {parcours[openStep].info.stack.map((tech, i) => (
                                            <span className="parcours-stack-chip" key={i}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Parcours;
