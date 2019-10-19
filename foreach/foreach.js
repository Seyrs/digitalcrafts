/**
 * Using the documentation found here:
 * 
 * https://www.w3schools.com/jsref/jsref_foreach.asp
 * 
 * Iterate through the arrayin a foreach each loop,
 * and console log the pokemen name and attack power as such:
 * "Pokemen Pikachu has an attack power of 500"
 */

var pokemon = [
    {
        name : "Pikachu",
        attackPower: 500
    },
    {
        name : "Charizard",
        attackPower: 1500
    },
    {
        name : "Kakkarot",
        attackPower: 9001
    }    
];

var myFunction = function(item) { 


console.log("Pokemon "  + item.name + " has an attack power of " + item.attackPower);
};

pokemon.forEach(myFunction);