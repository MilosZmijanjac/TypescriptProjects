const hex:any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorHex:Element=document.querySelector(".color");

const btnHex:HTMLElement=document.getElementById("btn");

btnHex.addEventListener("click",()=>{
    var colorInHex:string="#";
    for(let i =0;i<6;i++){
        const randomNumber:number=Math.floor(Math.random()*hex.length);
            colorInHex+=hex[randomNumber];
    }
    
    document.body.style.backgroundColor=colorInHex;
    colorHex.textContent=colorInHex;
});