/* Number of stars per rarity */
const Rarity = {
    COMMON: 1,
    UNCOMMON: 2,
    RARE: 3,
}

// TODO: Might limit backpack's slot to 9
const backpack = [
    {
        name: "Kitten",
        quote: "Who would even bring a cat to work?",
        stats: "-1 focus, +2 cuteness",
        image: '<i class="fa-solid fa-cat"></i>',
        rarity: Rarity.RARE
    }
]

let backpackElement = document.getElementsByClassName('backpack')[0]

console.log(backpackElement)

backpack.forEach(item => {
    
});