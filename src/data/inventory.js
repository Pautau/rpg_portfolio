import { Rarity } from '../enums/rarity.js';

/* Items in inventory */
export const inventory = [
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
        default: true,
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