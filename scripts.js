
let memory="";
let actualnumber="";
let operator="";
let result=0;
let operaciones=[];


function add(one,two){
     return parseInt(one+two);
   
}
function subtract(one,two){
    return parseInt(one-two);
}
function divide(one,two){
    return parseInt(one/two);
}
function multiply(one,two){
    return parseInt(one*two);
}
function percentage(one){
    return parseInt(one*0.1);
}
function elevete(one,two){
    return parseInt(Math.pow(one,two));
};
function center(o){
    switch(o){
        case "+":
             memory= add(memory,actualnumber);
             break;
        case "-":
            memory= subtract(memory,actualnumber);
             break;
        case "/":
            memory= divide(memory,actualnumber);
             break;
        case "*":
            memory= multiply(memory,actualnumber);
             break;
        case "%":
            memory= percentage(actualnumber);
            break;
        case "^":
            memory= elevete(memory,actualnumber);
            break;    
    }
}
function operate(e){
    
    if(e==="="){ center(operator);
        
        
    }else{
        if(operator==""){
            operator=e; 
           memory=actualnumber;
        }else{
            operator=e;
            center(e);
        }
        
    }
    console.log(operator);
    actualnumber="";  
     
   console.log("memoria es "+ memory);
   console.log("actual number es" + actualnumber);
    topScreen=document.getElementById("topscreen").innerHTML=`${memory}`;
    botScreen=document.getElementById("botscreen").innerHTML=`${actualnumber}`; 

}
function numberBotScreen(n){
    if(actualnumber==="") actualnumber=n;
    else{  actualnumber+=n;} 
    botScreen=document.getElementById("botscreen").innerHTML=`${actualnumber}`; 
    console.log(actualnumber);
    
}

const clear=document.getElementById("clear").addEventListener("click",()=>{ 
     actualnumber="";
     memory="";
     operator="";
     botScreen=document.getElementById("botscreen").innerHTML=`${actualnumber}`; 
     topScreen=document.getElementById("topscreen").innerHTML=`${memory}`;
     console.log(actualnumber, memory)

})

const zero=document.getElementById("0").addEventListener("click",()=>{ numberBotScreen("0")});
const one=document.getElementById("1").addEventListener("click",()=>{ numberBotScreen("1")});
const two=document.getElementById("2").addEventListener("click",()=>{ numberBotScreen("2")});
const three=document.getElementById("3").addEventListener("click",()=>{ numberBotScreen("3")});
const four=document.getElementById("4").addEventListener("click",()=>{ numberBotScreen("4")});
const five=document.getElementById("5").addEventListener("click",()=>{ numberBotScreen("5")});
const six=document.getElementById("6").addEventListener("click",()=>{ numberBotScreen("6")});
const seven=document.getElementById("7").addEventListener("click",()=>{ numberBotScreen("7")});
const eight=document.getElementById("8").addEventListener("click",()=>{ numberBotScreen("8")});
const nine=document.getElementById("9").addEventListener("click",()=>{ numberBotScreen("9")});
const point=document.getElementById(".").addEventListener("click",()=>{ numberBotScreen(".")});

const suma=document.getElementById("+").addEventListener("click",()=>{ operate("+")});
const resta=document.getElementById("-").addEventListener("click",()=>{ operate("-")});
const division=document.getElementById("/").addEventListener("click",()=>{ operate("/")});
const multiplicacion=document.getElementById("x").addEventListener("click",()=>{ operate("*")});
const elevate=document.getElementById("^").addEventListener("click",()=>{ operate("^")});
const porcentage=document.getElementById("%").addEventListener("click",()=>{ operate("%")});
const equal=document.getElementById("=").addEventListener("click",()=>{ operate("=")});

let botScreen=document.getElementById("botscreen").innerHTML=`${actualnumber}`;
let topScreen=document.getElementById("topscreen").innerHTML=`${memory}`;







