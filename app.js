
//#region STARTING TEMP ELEMENT & INPUT
// CREATE VARIABLE - TO TARGET ELEMENT WHERE USER WILL ENTER STARTING TEMP VALUE
let tempValue= document.getElementById("tempVal")

//CREATE VARIABLE TO HOLD INFORMATION USER INPUTS
let startTempValue;
//#endregion

//#region SUBMIT USER INFORMATION ELEMENT & ACTION
//CREATE VARIABLE TO TARGET ELEMENT FOR EVENT LISTENER
let enterTempValue= document.getElementById("submitVal")

//CREATE EVENT LISTENER FOR SUBMIT BUTTON
enterTempValue.addEventListener("click", tempConverter);
//#endregion

//#region UPDATE AND DISPLAY CONVERTED TEMP
//CREATE VARIABLE TO TARGET ELEMENT TO DISPLAY CONVERTED TEMP TO WEBPAGE
let convertedTempDisplay= document.querySelector(".tempResults p")

//CREATE VARIABLE TO HOLD UPDATED VALUE INFORMATION
let tempConversion;
//#endregion

//FUNCTION IS CALLED WHEN USER CLICKS SUBMIT BUTTON
function tempConverter(){
    
    //startTempValue WAS CREATED AS A GLOBAL VARIABLE TO HOLD THE INFORMATION THE USER HAS ENTERED - .VALUE PULLS JUST THE TEXT FROM THE ELEMENT
    startTempValue=tempValue.value;

    //VARIABLES CREATED JUST FOR FUNCTION
    let celsiusTemp;
    let kelvinTemp;
    let farenheitTemp;

    //USE---VARIABLES GRAB THE RADIO BUTTONS INDIVIDUALLY BY THEIR UNIQUE ID'S - THIS IS THE SET THAT THE USER HAS CHOSEN AS THEIR KNOWN TEMPERATURE UNIT
    let useFah=document.getElementById("fahStart");
    let useCel=document.getElementById("celStart");
    let useKel=document.getElementById("kelStart");

    //FIND---VARIABLES GRAB THE RADIO BUTTONS INDIVIDUALLY BY THEIR UNIQUE ID'S - THIS IS THE SET THE USER HAS CHOSEN TO CONVERT TO 
    let findFah= document.getElementById("fahEnd");
    let findCel= document.getElementById("celEnd");
    let findKel= document.getElementById("kelEnd");

    //IF ELSE TREE - RADIO BUTTONS ARE EVALUATED BY USING .CHECK - A TRUE OR FALSE VALUE IS RETURNED - IF USER HAS CHECKED THAT RADIO BUTTON IT RUNS TRUE - IF NOT FALSE

    //WHEN A TRUE && TRUE STATEMENT IS FOUND:
    //VARIABLES CREATED IN THE FUNCTION (celsiusTemp, kelvinTemp, farenheitTemp)CAN BE UPDATED TO FIND THE CONVERSION

    //FUNCTIONS WERE CREATED TO HANDLE THE CALCULATIONS AND ARE CALLED ONLY WHEN NEEDED - EX (fahToCel)

    //UPDATE THE GLOBAL VARIABLE tempConversion TO HOLD THE CONVERTED NUMBER

    if (useFah.checked && findCel.checked){
        farenheitTemp=startTempValue;
        celsiusTemp= fahToCel(farenheitTemp);
        tempConversion=celsiusTemp
        convertedTempDisplay.innerHTML="Degrees in Celsius: "
    }else if(useFah.checked && findKel.checked){
        farenheitTemp=startTempValue;
        celsiusTemp=fahToCel(farenheitTemp);
        kelvinTemp=celToKel(celsiusTemp);
        tempConversion=kelvinTemp
        convertedTempDisplay.innerHTML="Degrees in Kelvin: "
    }else if(useCel.checked && findFah.checked){
        celsiusTemp=startTempValue
        farenheitTemp=celToFah(celsiusTemp);
        tempConversion=farenheitTemp
        convertedTempDisplay.innerHTML="Degrees in Farenheit: "
    }else if(useCel.checked && findKel.checked){
        celsiusTemp=startTempValue
        kelvinTemp=celToKel(celsiusTemp);
        tempConversion=kelvinTemp
        convertedTempDisplay.innerHTML="Degrees in Kelvin: "
    }else if(useKel.checked && findCel.checked){
        kelvinTemp=startTempValue
        celsiusTemp=kelToCel(kelvinTemp);
        tempConversion=celsiusTemp
        convertedTempDisplay.innerHTML="Degrees in Celsius: "
    }else if(useKel.checked && findFah.checked){
        kelvinTemp=startTempValue
        celsiusTemp=kelToCel(kelvinTemp);
        farenheitTemp=celToFah(celsiusTemp);
        tempConversion=farenheitTemp;
        convertedTempDisplay.innerHTML="Degrees in Farenheit: "
    }else{
        alert("Error:  Two different temperture units must be selected")
    }//END IF/ELSE

    
   
    //USE THE GLOBAL VARIABLES CREATED EARLIER TO TARGET THE ELEMENT WHERE I WANT TO DISPLAY THE CONVERTED NUMBER - UPDATE THE TEXT BY USING .INNERHTML WITH tempConversion VARIABLE THAT WAS SET IN THE ABOVE IF/ELSE TREE
    convertedTempDisplay.innerHTML+=tempConversion;

    convertedTempDisplay.style.fontFamily="Honk"
    convertedTempDisplay.style.fontSize="60px"
    let convertedBackground=document.querySelector(".tempResults")
}//END tempConverter

function fahToCel(fahTemp){

    let celsiusTemp=(fahTemp-32) * 5/9;
    (`Temp in Celsius: ${celsiusTemp}`);
    return celsiusTemp
}//END fahToCel
    
function celToKel(celTemp){
    let kelvinTemp= celTemp + 273.15;
    return kelvinTemp
}//End celToKel

function celToFah(celTemp){
    let fahTemp=(celTemp * 9/5) + 32;
    return fahTemp;
}//END celToFah

function kelToCel(kelTemp){
    let celTemp= kelTemp-273.15;
    return celTemp;
}//END kelToCel
     



 

