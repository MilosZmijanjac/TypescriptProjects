var btnDecrease = document.getElementById("decrease");
var btnReset = document.getElementById("reset");
var btnIncrease = document.getElementById("increase");
var value = document.getElementById("value");
btnDecrease.addEventListener("click", function () {
    var currentValue = +value.textContent;
    currentValue--;
    value.textContent = "" + currentValue;
});
btnReset.addEventListener("click", function () {
    value.textContent = "0";
});
btnIncrease.addEventListener("click", function () {
    var currentValue = +value.textContent;
    currentValue++;
    value.textContent = "" + currentValue;
});
