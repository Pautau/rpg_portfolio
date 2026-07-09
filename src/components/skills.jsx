import React from 'react';
import '../assets/styles/skills.css';
import { skills } from '../data/skills.js';
import { RarityLabel } from '../enums/rarity.js';

function Skills() {
    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <div className="skill-row" key={index}>
                    <div className="skill-icon" data-rarity={skill.rarity}>
                        <i className={skill.image}></i>
                    </div>
                    <div className="skill-info">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level" data-rarity={skill.rarity}>{RarityLabel[skill.rarity]}</span>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                data-rarity={skill.rarity}
                                style={{ width: `${(skill.rarity / 4) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
