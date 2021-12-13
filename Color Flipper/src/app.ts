const colors:string[] = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn:HTMLElement=document.getElementById("btn");

const color:Element=document.querySelector(".color");

btn.addEventListener("click",()=>{
    const randomNumber:number=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];

});