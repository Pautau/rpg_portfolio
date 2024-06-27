import React, { useState } from 'react';
import '../assets/styles/backpack.css';

/* Number of stars per rarity */
const Rarity = {
    COMMON: 1,
    UNCOMMON: 2,
    RARE: 3,
    EPIC: 4,
}

/* Items in backpack */
const backpack = [
    {
        name: "Coffee",
        quote: "The only true source of energy for developers",
        stats: "+10 debugging skills, +5 focus",
        image: "fas fa-coffee",
        rarity: Rarity.EPIC
    },
    {
        name: "Kitten",
        quote: "Who would even bring a cat to work?",
        stats: "+10 sanity, -2 focus",
        image: "fas fa-cat",
        rarity: Rarity.RARE
    },
    {
        name: "Rubber Duck",
        quote: "Silent but insightful.",
        stats: "+5 debugging skills, +3 sanity",
        image: "fas fa-duck",
        rarity: Rarity.RARE
    },
    {
        name: "Headphones",
        quote: "Especially useful in open-space",
        stats: "+2 focus",
        image: "fas fa-headphones",
        rarity: Rarity.UNCOMMON
    },
    {
        name: "Laptop",
        quote: "Your trusty companion for turning coffee into code",
        stats: "Allows the user to code",
        image: "fas fa-laptop",
        rarity: Rarity.UNCOMMON
    },
    {
        name: "Mouse",
        quote: "Mostly useless if you're a Vim user",
        stats: "Allows the user to missclick",
        image: "fas fa-mouse",
        rarity: Rarity.UNCOMMON
    },

    {
        name: "Tissue",
        quote: "For wiping away tears of joy after fixing bugs",
        stats: "",
        image: "fas fa-box-tissue",
        rarity: Rarity.COMMON
    },
    {
        name: "Keys",
        quote: "Doesn't grant access to backend servers",
        stats: "",
        image: "fas fa-key",
        rarity: Rarity.COMMON
    },
    {
        name: "Empty",
        quote: "",
        stats: "",
        image: "fa-solid fa-crystal-ball",
        rarity: ""
    }
]



function Backpack() {
    const [tooltipData, setTooltipData] = useState({
        name: "Select an item",
        quote: "",
        rarity: "",
        stats: "",
    });

    const showTooltip = (event) => {
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
                {backpack.map((item, index) => (
                    <div
                        key={index}
                        className="slot"
                        data-name={item.name}
                        data-quote={item.quote}
                        data-rarity={item.rarity}
                        data-stats={item.stats}
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}
                    >
                        <i class={item.image}></i>
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
                                <div className="star_rarity" data-rarity={tooltipData.rarity}>
                                    <i className="fas fa-star"></i>
                                </div>
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