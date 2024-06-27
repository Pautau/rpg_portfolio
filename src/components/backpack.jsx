import React, { useState } from 'react';
import '../assets/styles/backpack.css';
import { inventory } from '../data/inventory.js';



function Backpack() {
    const [selectedDefault, setSelectedDefault] = useState(true)
    const [tooltipData, setTooltipData] = useState({
        name: "Laptop",
        quote: "Your trusty companion for turning coffee into code",
        stats: "Allows the user to code",
        image: "fas fa-laptop",
        rarity: 2
    });

    const showTooltip = (event) => {
        setSelectedDefault(false)
        const target = event.currentTarget;
        const name = target.getAttribute('data-name');
        const quote = target.getAttribute('data-quote');
        const rarity = target.getAttribute('data-rarity');
        const stats = target.getAttribute('data-stats');

        setTooltipData({ name, quote, rarity, stats });
    };

    // Fonction pour masquer le tooltip
    const hideTooltip = () => {
        setTooltipData(
            {
                name: "Please,",
                quote: "select an item",
                rarity: "",
                stats: "",
            });
        
        
    };

    return (
        <>
            <div className="backpack">
                {inventory.map((item, index) => (
                    <div
                        key={index}
                        className={item.default && selectedDefault === true ? 'selectedDefault slot' : 'slot'}
                        data-name={item.name}
                        data-quote={item.quote}
                        data-rarity={item.rarity}
                        data-stats={item.stats}
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}
                    >
                        <i className={item.image}></i>
                    </div>
                ))}
            </div>

            {/*  */}

            <div className="tooltip">
                <div className="rarity">
                    {/* immediately invoked function expression*/}
                    {(() => {
                        const elements = [];
                        for (let i = 0; i < tooltipData.rarity; i++) {
                            elements.push(
                                <i className="fas fa-star" data-rarity={tooltipData.rarity}></i>
                            )
                        }
                        return elements;
                    })()}
                </div>
                <div className="info_tooltip">
                    <p className="title_tooltip">{tooltipData.name}</p>
                    <p className="quote_tooltip">{tooltipData.quote}</p>
                    <p className="stats_tooltip">{tooltipData.stats}</p>
                </div>
            </div>
        </>
    );
};

export default Backpack;