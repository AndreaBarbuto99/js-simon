// dichiarazioni variabili
let numShow = document.getElementById("numbers-list");
let formShow = document.getElementById("answers-form")
let myButton = document.querySelector(".btn");
let myForm = document.querySelector(".form-control");
let userNum = document.querySelectorAll(".user-num");
let formNum = [];
let timeNumbers;
let randArray;



// CHIAMATA FUNZIONI
randArray = getRandomInArray(1, 50, 5);
console.log(randArray);
numShow.innerHTML = `<li>${randArray}</li>`
timeNumbers = setTimeout( () => {
  numShow.classList.add("d-none");
  formShow.classList.remove("d-none");
  formShow.classList.add("d-block");

 
}
, 5000);









let counterUser = 0;
let userRight = [];





myButton.addEventListener("click", () => {

  for (let i = 0; i < 5; i++) {
    formNum.push(parseInt(userNum[i].value));
  }
  console.log(formNum);
  
  for (let i = 0; i < 5 ; i++) {
    
    if(formNum.includes(randArray[i]))
    {
      counterUser++;
      userRight.push(randArray[i]);
    }
    
  }

  console.log("hai indovinato" + " " + counterUser + " " + "numeri");
  console.log("i numeri indovinati sono" + " " + userRight);

}

)



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

