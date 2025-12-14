// dichiarazioni variabili
let numShow = document.getElementById("numbers-list");
let formShow = document.getElementById("answers-form")
let timeNumbers;



// CHIAMATA FUNZIONI
numShow.innerHTML = `<li>${getRandomInArray(1, 50, 5)}</li>`
timeNumbers = setTimeout( () => {
  numShow.classList.add("none");
  formShow.classList.remove("none");
}
, 5000);














formShow.addEventListener("submit", (e) => {
  e.preventDefault();
}
)

function getRandomInArray (min, max, tot) {
  const numArray = [];
  
  while (numArray.length < tot)
  {
    const randNum = genRandomNumber(min, max);
    
    if (!numArray.includes(randNum))
    {
    numArray.push(randNum);
    }
  }
  return numArray;
}


function genRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomInArray(1, 50, 5));