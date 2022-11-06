var RandomNumber1 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage = "images/dice" + RandomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomDiceImage);


var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage2 = "images/dice" + RandomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", RandomDiceImage2);

function get_winner(num1, num2) {
    if (RandomNumber1 > RandomNumber2) {
        return "player 1 wins";
    }
    else if (RandomNumber2 > RandomNumber1) {
        return "player 2 wins";
    }
    else {
        return "draw";
    }
}
winner = get_winner(RandomNumber1, RandomNumber2)
document.querySelector("h1").innerHTML = winner
