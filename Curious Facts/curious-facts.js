

const curiousUrl= "https://uselessfacts.jsph.pl/api/v2/facts/random";
const Facts= document.querySelector(".view");
let favoriteList=[];
const favoriteFact=document.getElementById("favorite-List");

function getAFact(){
    fetch(curiousUrl)
        .then((response) => response.json())
        .then((cFs) => Facts.textContent= cFs.text)
    }

const getbutton=document.getElementById("clickfact");
getbutton.addEventListener("click", getAFact);


function saveFavorites(){
    const currentFact= Facts.textContent;
    if(currentFact.trim() !== ' ') {
        favoriteList.push(currentFact);
        console.log("favoritos", favoriteList)   
        addFavorites(favoriteFact);  
    }
}

function addFavorites(){
    favoriteFact.innerHTML=' ';
    favoriteList.forEach(fact => {
        const li= document.createElement("li");
        li.textContent=fact;
        favoriteFact.appendChild(li);
    })
}

const favoritebotton= document.getElementById("buttonloveit");
favoritebotton.addEventListener("click", saveFavorites);


    





















