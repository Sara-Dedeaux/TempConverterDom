// CREATE VARIABLE - TO TARGET ELEMENT WHERE USER WILL ENTER STARTING TEMP VALUE
let tempValue= document.getElementById("tempVal")
console.log(tempValue)

//CREATE VARIABLE TO HOLD USERINPUT 
let startTempValue;
console.log(startTempValue)

//CREATE VARIABLE FOR EVENT LISTENER
let enterTempValue= document.getElementById("submitVal")
console.log(enterTempValue)

//CREATE ARRAY VARIABLE TO HOLD RADIO BUTTON STARTING TEMP VALUES
let startTempSelections= document.querySelectorAll(".tempUnit label")
console.log(startTempSelections[1].innerHTML)

//CREATE ARRAY VARIABLE TO HOLD RADIO BUTTON END TEMP VALUES
let endTempSelections= document.querySelectorAll(".tempUnit label")
console.log(endTempSelections[1].innerHTML)

//CREATE VARIABLE TO HOLD CONVERTED TEMP TARGET
let convertedTempDisplay= document.querySelector(".tempResults p")
console.log(convertedTempDisplay); 


//CREATE VARIABLE TO HOLD UPDATED VALUE
let tempConversion;


//CREATE EVENT LISTENER FOR SUBMIT BUTTON
enterTempValue.addEventListener("click", tempConverter);

function tempConverter(){
    //debugger
    
    startTempValue=tempValue.value;
    console.log(startTempValue)
  
    let celsiusTemp;
    let kelvinTemp;
    let farenheitTemp;
    let useFah=document.getElementById("fahStart");
    let useCel=document.getElementById("celStart");
    let useKel=document.getElementById("kelStart");
    let findFah= document.getElementById("fahEnd");
    let findCel= document.getElementById("celEnd");
    let findKel= document.getElementById("kelEnd");

    if (useFah.checked && findCel.checked){
        farenheitTemp=startTempValue;
        celsiusTemp= fahToCel(farenheitTemp);
        tempConversion=celsiusTemp

    }

    else if(useFah.checked && findKel.checked){
        farenheitTemp=startTempValue;
        celsiusTemp=fahToCel(farenheitTemp);
        kelvinTemp=celToKel(celsiusTemp);
        tempConversion=kelvinTemp
        
    }

    else if(useCel.checked && findFah.checked){
        celsiusTemp=startTempValue
        farenheitTemp=celToFah(celsiusTemp);
        tempConversion=farenheitTemp
    }

    else if(useCel.checked && findKel.checked){
        celsiusTemp=startTempValue
        kelvinTemp=celToKel(celsiusTemp);
        tempConversion=kelvinTemp
    }
    
    else if(useKel.checked && findCel.checked){
        kelvinTemp=startTempValue
        celsiusTemp=kelToCel(kelvinTemp);
        tempConversion=celsiusTemp
    }

    else if(useKel.checked && findFah.checked){
        kelvinTemp=startTempValue
        celsiusTemp=kelToCel(kelvinTemp);
        farenheitTemp=celToFah(celsiusTemp);
        tempConversion=farenheitTemp;
    }
   
    else{
        alert("Error: 2 different temperture units must be selected")
    }
   
    convertedTempDisplay.innerHTML=tempConversion;
        
}

function fahToCel(fahTemp){

    let celsiusTemp=(fahTemp-32) * 5/9;
        (`Temp in Celsius: ${celsiusTemp}`);
        return celsiusTemp
        
}//END fahToCel
    
function celToKel(celTemp){
    let kelvinTemp= celTemp + 273.15;
    console.log(`Temp in Kelvin: ${kelvinTemp}`);
    return kelvinTemp
}//End celToKel

function celToFah(celTemp){
    let fahTemp=(celTemp * 9/5) + 32;
    console.log(`Temp in Farenheit: ${fahTemp}`);
   
    return fahTemp;
}//END celToFah

function kelToCel(kelTemp){
    let celTemp= kelTemp-273.15;
    console.log(`Temp in Celsius: ${celTemp}`);
    return celTemp;

}//END kelToCel
     



 

