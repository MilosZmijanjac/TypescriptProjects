var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var colorHex = document.querySelector(".color");
var btnHex = document.getElementById("btn");
btnHex.addEventListener("click", function () {
    var colorInHex = "#";
    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * hex.length);
        colorInHex += hex[randomNumber];
    }
    document.body.style.backgroundColor = colorInHex;
    colorHex.textContent = colorInHex;
});
