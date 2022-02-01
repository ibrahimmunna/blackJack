let firstCard = getRandomNumber()
let secondCard = getRandomNumber();
let card1 = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = ""

let sum = card1[0] + card1[1];

let cardno = 1;
cardno = cardno + 1;
let messageEL = document.getElementById("messageEl1")
let sumEl = document.getElementById("sum")
let cardEl1 = document.getElementById("card1")
let cardEl2 = document.getElementById("card2")

function getRandomNumber() {
    let random = Math.random() * 12;
    let random1 = Math.floor(random)
    return random1
}

function playagain() {
    yes()
}

function yes() {

    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "Black jack!!!!"
        hasBlackJack = true;
    } else {
        message = "you lost your money"
        isAlive = false;
    }


    cardEl1.innerText = "card 1 : " + firstCard + " "


}

function nextcard() {

    let cardno = [2]
    for (let i = 2; i < cardno.length; i++) {

        cardEl2.innerText = "card " + cardno[i]

    }
    let card = getRandomNumber()


    sum += card;
    sumEl.innerText = "Sum: " + sum;
    card1.push(card)
    console.log(card1)
    yes()
    messageEL.innerText = message;

}


function no() {
    message = "Good Luck!!!!";
    messageEL.innerText = message;
}