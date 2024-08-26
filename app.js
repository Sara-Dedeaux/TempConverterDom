// CREATE VARIABLE - TO TARGET ELEMENT FOR TEMP VALUE
let tempValue= document.getElementById("tempVal")
console.log(tempValue)

//CREATE VARIABLE TO HOLD USERINPUT 
let startTempValue= "";
console.log(startTempValue)

//CREATE VARIABLE FOR EVENT LISTENER
let enterTempValue= document.getElementById("submitVal")
console.log(enterTempValue)

//CREATE EVENT LISTENER FOR SUBMIT BUTTON
enterTempValue.addEventListener("click", () => {
     
    startTempValue=tempValue.value;
    console.log(startTempValue)

})

