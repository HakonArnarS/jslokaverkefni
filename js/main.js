console.log("virkar!"); 

//Breytur sem kalla á elementm úr html skjalinu. 
var searchInput = document.querySelector("#search"); 
var divShowSearch = document.querySelector(".show-search");
var divCharacters = document.querySelector(".characters");
var getRandomBtn = document.querySelector("#myBtn");


    
//Array sem inniheldur öll kortin/karakterana.
var characters = [
    {
        text: "My name is Mr. Tickle",
        image: "https://shop.mrmen.com/wp-content/themes/mrmen/assets/fp-square-mr-tickle.png",
        name: "Name: Mr. Tickle",
        color: "Color: Orange.",
        characteristic: "He loves to tickle."
    },
    {
        text: "I am Little Miss Splendid",
        image: "https://shop.mrmen.com/wp-content/themes/mrmen/assets/fp-square-little-miss-splendid.png",
        name: "Name: Little Miss Splendid",
        color: "Color: Yellow.",
        characteristic: "She is better than everyone else."
    },
    {
        text: "My name is Mr. Happy!",
        image: "https://shop.mrmen.com/wp-content/themes/mrmen/assets/fp-square-mr-happy.png",
        name: "Name: Mr. Happy",
        color: "Color: Yellow",
        characteristic: "He is always happy!"
    },
    {
        text: "I'm Little Miss Birthday",
        image: "https://shop.mrmen.com/wp-content/themes/mrmen/assets/fp-square-little-miss-birthday.png",
        name: "Name: Little Miss Birthday",
        color: "Color: Pink",
        characteristic: "She loves birthdays just like her brother, Mr. Birthday."
    },
    {
        text: "I'm Mr. Grumpy",
        image: "https://shop.mrmen.com/wp-content/themes/mrmen/assets/fp-square-mr-grumpy.png",
        name: "Name: Mr. Grumpy",
        color: "Color: Blue",
        characteristic: "He is the grumpiest person in the world."
    },
]; 

//Lykkja sem sækir karakterana sem eru neðst á síðunni. 
for(var i = 0; i < characters.length; i++){

    divCharacters.innerHTML += `
    <div class="karakter">
        <p>${characters[i].text}</p>
        <img src="${characters[i].image}"/>

    </div>
    `
};

//Function sem skilar korti úr leit með meiri upplýsingum.
var showSearch = function(charInfo){
    return `
    <div class="searchChar">
        <h3>${charInfo.text}</h3>
        <img src="${charInfo.image}"/>
        <h2>${charInfo.name}</h2>
        <p>${charInfo.color}</p>
        <p>${charInfo.characteristic}</p>
    </div>
    `
};

//Leitarorð sýna karaktera ef þau eiga við. 
searchInput.onkeyup = function(){ 
    divShowSearch.innerHTML = "";

    for (var i = 0; i < characters.length; i++) {
        var leit = characters[i].name.toUpperCase().search(searchInput.value.toUpperCase());

        if(leit !== -1){
            divShowSearch.innerHTML += showSearch(characters[i]);

        }
         
    }
    if(searchInput.value === ""){
        divShowSearch.innerHTML = ""; 
    }
};


// Reyndi að láta random karakter birtast með getRandomBtn.onclick.
// ég bara skila ekki hvað ég á að gera til þess að fá það til að virka. :S

function getRandom() {
    var randomChar = characters[Math.floor(Math.random()*characters.length)];

    document.body.innerHTML += randomChar;
}; 

console.log(getRandom); 

getRandomBtn.onclick = getRandom; 



    









