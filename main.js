class Card {
    constructor(suit, rank) {
        //super();
        this.suit = suit;
        this.rank = rank;
    }
}

function makeDeck() {
    let deck = [];
    for (suit in SUIT) {
        for (rank in RANK) {
            deck.push(new Card(SUIT[suit], RANK[rank]));
        }
    }
    return deck;
}

let totalCards = [];
let deck = makeDeck();

function printCard(card) {
    return `${card.rank[0]}`;
}

function removeCard(card) {
    deck.splice(card.value, 1);
}

const hand1 = document.getElementById("hand-1");
hand1.value = Math.floor(Math.random() * 52);
totalCards.push(deck[hand1.value]);
hand1.innerHTML = printCard(deck[hand1.value]);
hand1.dataset.suit = deck[hand1.value].suit;
removeCard(hand1);

const hand2 = document.getElementById("hand-2");
hand2.value = Math.floor(Math.random() * 51);
totalCards.push(deck[hand2.value]);
hand2.innerHTML = printCard(deck[hand2.value]);
hand2.dataset.suit = deck[hand2.value].suit;
removeCard(hand2);

const flop1 = document.getElementById("flop-1");
flop1.value = Math.floor(Math.random() * (50));
totalCards.push(deck[flop1.value]);
flop1.innerHTML = printCard(deck[flop1.value]);
flop1.dataset.suit = deck[flop1.value].suit;
removeCard(flop1);

const flop2 = document.getElementById("flop-2");
flop2.value = Math.floor(Math.random() * (49));
totalCards.push(deck[flop2.value]);
flop2.innerHTML = printCard(deck[flop2.value]);
flop2.dataset.suit = deck[flop2.value].suit;
removeCard(flop2);

const flop3 = document.getElementById("flop-3");
flop3.value = Math.floor(Math.random() * (48));
totalCards.push(deck[flop3.value]);
flop3.innerHTML = printCard(deck[flop3.value]);
flop3.dataset.suit = deck[flop3.value].suit;
removeCard(flop3);

const turnCard = document.getElementById("turn");
turnCard.value = Math.floor(Math.random() * (47));
totalCards.push(deck[turnCard.value]);
turnCard.innerHTML = printCard(deck[turnCard.value]);
turnCard.dataset.suit = deck[turnCard.value].suit;
removeCard(turnCard);

const riverCard = document.getElementById("river");
riverCard.value = Math.floor(Math.random() * (46));
totalCards.push(deck[riverCard.value]);
riverCard.innerHTML = printCard(deck[riverCard.value]);
riverCard.dataset.suit = deck[riverCard.value].suit;
removeCard(riverCard);

const flopButton = document.getElementById("flop-button");
flopButton.addEventListener("click", () => {
    document.body.dataset.flop = true;
})

const turnButton = document.getElementById("turn-button");
turnButton.addEventListener("click", () => {
    document.body.dataset.turn = true;
})

const riverButton = document.getElementById("river-button");
riverButton.addEventListener("click", () => {
    document.body.dataset.river = true;
})

console.log(totalCards);

function checkPair() {
    let tempCards = totalCards.slice();
    for (i = 0; i < tempCards.length; i++) {
        //let count = 0;
        for (j = i+1; j < tempCards.length; j++) {
            if (tempCards[i].rank === tempCards[j].rank) {
                //console.log(`you have a pair of ${tempCards[i].rank[1]}`);
                //count += 1;
                //console.log(tempCards[i].rank[0], tempCards[j].rank[0]);
                //tempCards.splice(i, 1);
                //console.log(tempCards);
                //console.log(totalCards);
                //console.log(`you have a pair of ${tempCards[i].rank[1]}`);
                //tempCards.splice(i, 1);
                //tempCards.splice(j, 1);
                return i;
            }
        }
    }
}

function checkThreeKind() {
    let tempCards = totalCards.slice();
    if (checkPair) {
        tempCards.splice(checkPair, 1);
    } else {
        return false;
    }
}

console.log(checkPair());

