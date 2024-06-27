/* créer des enum pour la rareté. rare : 3 (for number of stars)*/
const backpack = [
    {
        name: "Kitten",
        quote: "Who would even bring a cat to work?",
        stats: "-1 focus, +2 cuteness",
        image: '<i class="fa-solid fa-cat"></i>',
        rarity: "rare"
    }
]

let backpackElement = document.getElementsByClassName('backpack')[0]

console.log(backpackElement)

backpack.forEach(item => {
    
});