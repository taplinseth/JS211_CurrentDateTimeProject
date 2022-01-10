// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let myNum = 10;

const makeString = () => {
  let string_myNum = String(myNum);

  console.log(typeof string_myNum);
  document.getElementById("display-element2").innerHTML = typeof string_myNum + " " + string_myNum;
}

// Write a JavaScript program to convert a string to the number.
const makeNumber = () => {
  let number_myNum = Number(myNum);
  
  console.log(typeof number_myNum);
  document.getElementById("display-element3").innerHTML = typeof number_myNum + " " + number_myNum;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const datatype = () => {

  let userInput = prompt("type here to see datatype: ")

  if(userInput == "true" || userInput == "false") {
    alert("Your datatype is: boolean"); // * Boolean

  }else if(userInput == "null") {
    alert("Your datatype is: null"); // * Null

  }else if(userInput == "undefined") {
    alert("Your datatype is: undefined"); // * Undefined

  }else if(userInput >= -999999 && userInput <= 999999) {
    alert("Your datatype is: number"); // * Number

  }else if(userInput == "nan" || userInput == "NaN") {
    alert("Your datatype is: NaN"); // * NaN

  }else{
    alert("Your datatype is: string"); // * String
  }
}







  

  
// Write a JavaScript program that adds 2 numbers together.
const addition = () => {
  let num1 = 2;
  let num2 = 3;
  let num3 = num1 + num2;

  console.log(num3);
  document.getElementById("display-element5").innerHTML = num3;
}



// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = () => {
  let myNumber1 = 1;
  let myNumber2 = 2;

  let addition = myNumber1 + myNumber2;
  let multiplication = myNumber1 * myNumber2;

  if(addition === 3 && multiplication === 2) {
    document.getElementById("display-element6").innerHTML = "conditions are true";
  }else{
    return 0;
  }
  
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {
  let myNumber1 = 1;
  let myNumber2 = 2;

  let addition = myNumber1 + myNumber2;
  let multiplication = myNumber1 * myNumber2;

  if(addition === 3 || multiplication === 5) {
    document.getElementById("display-element7").innerHTML = "one condition is true";
  }else{
    return 0;
  }  
}



// Write a JavaScript program that runs when both things are not true.  
const bothFalse = () => {
  let myNumber1 = 1;
  let myNumber2 = 2;

  let addition = myNumber1 + myNumber2;
  let multiplication = myNumber1 * myNumber2;

  if(addition !== 4 && multiplication !== 5) {
    document.getElementById("display-element8").innerHTML = "conditions are false";
  }else{
    return 0;
  }  
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
