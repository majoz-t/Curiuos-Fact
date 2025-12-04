
/*const curiousUrl= "https://uselessfacts.jsph.pl/api/v2/facts/random"
const Facts= document.querySelector(".view")



fetch(curiousUrl)
    .then(data => data.json())
    //.then(data=>console.log(data))
    .then(response => Facts.innerHTML= response.text)
    //.then(response => console.log(response))
    
    //.then(fact => Facts.innerHTML = fact)

function getAFact(){
    const button = document.querySelector(".clickfact");
    button.addEventListener("click", fetch);
}
*/

/*async function curiousfact() {
    let response= await fetch ("https://uselessfacts.jsph.pl/ ");
    let fact= await response.json()

    console.log(fact)
}   

curiousFact();*/

/*const curiousUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const Facts = document.querySelector(".view");
function getAFact() {
  fetch(curiousUrl, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    Facts.innerHTML = data.text;
  })
  .catch(err => console.error(err));


console.log(Facts)
}*/
//document.querySelector(".clickfact").addEventListener("click", getAFact);

/*async function curiousfact() {
    const curiousUrl= "https://uselessfacts.jsph.pl/api/v2/facts/random"
    const resultfetch= await fetch(curiousUrl)
    const data= await resultfetch.json()
    console.log(data)
    return data.text
}*/

console.log("prueba")


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


    





















