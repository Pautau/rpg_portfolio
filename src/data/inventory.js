import { Rarity } from '../enums/rarity.js';

/* Items in inventory */
export const inventory = [
    {
        name: "Café",
        quote: "La seule véritable source d'énergie des développeurs",
        stats: "+10 en debug, +5 en concentration",
        image: "fas fa-coffee",
        rarity: Rarity.EPIC
    },
    {
        name: "Chaton",
        quote: "Qui emmène un chat au travail, sérieusement ?",
        stats: "+10 en joie, -2 en concentration",
        image: "fas fa-cat",
        rarity: Rarity.RARE
    },
    // { // J'ai perdu l'accès à la version premium de FontAwesome, plutôt que de laisser l'icône invisible, j'ai préféré la supprimer.
    //     name: "Canard en caoutchouc",
    //     quote: "Silencieux mais plein de sagesse.",
    //     stats: "+5 en debug, +3 en joie",
    //     image: "fas fa-duck",
    //     rarity: Rarity.RARE
    // },
    {
        name: "Casque",
        quote: "Particulièrement utile en open space",
        stats: "+2 en concentration",
        image: "fas fa-headphones",
        rarity: Rarity.UNCOMMON
    },
    {
        default: true,
        name: "Ordinateur portable",
        quote: "Ton fidèle compagnon pour transformer du café en code",
        stats: "Permet à l'utilisateur de développer",
        image: "fas fa-laptop",
        rarity: Rarity.UNCOMMON
    },
    {
        name: "Souris",
        quote: "Presque inutile si tu utilises Vim",
        stats: "Permet à l'utilisateur de merge un vendredi soir",
        image: "fas fa-mouse",
        rarity: Rarity.UNCOMMON
    },
    {
        name: "Boîte de mouchoirs",
        quote: "Pour essuyer les larmes de joie après avoir corrigé un bug",
        stats: "",
        image: "fas fa-box-tissue",
        rarity: Rarity.COMMON
    },
    {
        name: "Clés",
        quote: "Celles ci ne donnent pas accès aux serveurs de production",
        stats: "",
        image: "fas fa-key",
        rarity: Rarity.COMMON
    },
        {
        name: "Emplacement vide",
        quote: "",
        stats: "",
        image: "",
        rarity: ""
    },
        {
        name: "Emplacement vide",
        quote: "",
        stats: "",
        image: "",
        rarity: ""
    }
];