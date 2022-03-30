const colorArr = ["green", "red", "Rgba(133, 122, 200)", "#f15025", "#00FFFF", "rgb(255, 192, 203)", "yellow", "white", "black", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/*
btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colorArr[randomNumber];
    color.textContent = colorArr[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colorArr.length);
}
*/


btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    color.textContent = colorArr[randomNumber];
    document.body.style.backgroundColor = colorArr[getRandomNumber()];
})


function getRandomNumber() {
    return Math.floor(Math.random() * colorArr.length);
}