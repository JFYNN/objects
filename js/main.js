//opdracht 1
const Player1 = {
    firstName : 'Henk',
    lastName : 'van dal',
    age : 38,
    educationAttainment : 'Hbo',
    score : 209,
}
console.log(Player1)

//opdracht 2 

const facebookPage = {
    userName : 'Henkvdal',
    Title : 'even stappen met vrienden',
    story : 'we deden eens leuk op een vrijdag avond, lekker lopen zuipen',
    date : 3-2-2023,
    views : 2200,
}
console.log(facebookPage)

//opdracht 3 

const recipes = {
    title: 'bosbessentaart',
    description : 'Blueberry pie is een taart met een vulling van bosbessen',
    healthy : 'De antioxidanten in blauwe bessen zijn anthocyanen en flavonoïden en onderzoek heeft aangetoond dat de wilde bosbes deze veel meer bevat dan de blauwe bes',
}
const recipes1 = {
    title : 'bietensoep',
    description : 'Rode biet heeft een aardse smaak, die je lekker vindt of niet. Als je het kookt, smaakt het zoet. Daarom smaakt deze bietensoep...zoet!',
    healthy : 'Bieten zijn op verschillende manieren gunstig voor onze gezondheid - deze groenten met vitamine C, vezels en kalium helpen het immuunsysteem en de spierfunctie',

}
const recipes2 = {
    title : 'pannenkoekenmix',
    description : 'In pannenkoekenmix zit niets anders dan bloem, melk, ei en zout. Dit is de basis voor de pannenkoekenmix. De hoeveelheid van de ingrediënten geeft aan hoeveel pannenkoeken je kunt bakken. Meestal wordt ervan uitgegaan dat je met 250 gram bloem en 500 ml melk ongeveer 8 pannenkoeken kunt bakken',
    healthy : 'zeer gezond',
}

//opdracht 4 

let car1 = {
    title : 'Grijze Volkswagen Golf 5 1.6 FSI 5D Benzine 116PK/Bluetooth!',
    description : 'Bij deze te koop aangeboden een mooie Grijze Volkswagen Golf 5 1.6 FSI 5-deurs benzine 116pk uit het jaar 2005 met 289.012 kilometers op de teller',
    price : 1.999,
    kiloMetre : 289.012,
    buildDate : 2005,
}
console.log(car1)

//opdracht 5

let item1 = {
    title : 'croissants',
    description : '240 g',
    sale : 'per blik 1.39',
    prijs : 1.39,
}
console.log(item1)

//opdracht 7
let myArray = [recipes, recipes1, recipes2];
for (let index = 0; index < myArray.length; index++){
    console.log(myArray[index])
}


//opdracht 9
let container = document.querySelector('.container'); //.innerHTML = myArray
myArray.forEach(function(recipe) {
    // hier krijgen we recipe
    console.log("Naam recept: ", recipe.title);

    createInHtml(recipe);
});

function createInHtml(recipe) {
    let item = '<div class="item">Titel: ' + recipe.title + '</div>';
    item += '<div class="item">Beschrijving:' + recipe.description + '</div>';
    item += '<div class="item">Gezondheid: ' + recipe.healthy+ '</div>';
    item += '<div class="item">--------------------------------------</div>';

    container.innerHTML += item;
    item += '<div class="item">Gezondheid: ' + recipe.healthy+ '</div>';
}
