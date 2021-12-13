const btnDecrease:HTMLElement=document.getElementById("decrease");
const btnReset:HTMLElement=document.getElementById("reset");
const btnIncrease:HTMLElement=document.getElementById("increase");
const value:HTMLElement=document.getElementById("value");
btnDecrease.addEventListener("click",()=>{
  
    var currentValue:number=+value.textContent;
    currentValue--;
    value.textContent=""+currentValue;

});

btnReset.addEventListener("click",()=>{
    value.textContent="0";
});

btnIncrease.addEventListener("click",()=>{
  
    var currentValue:number=+value.textContent;
    currentValue++;
    value.textContent=""+currentValue;

});