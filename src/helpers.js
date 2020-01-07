/* eslint-disable default-case */

export function findSuit(cardApi) {
  let suit = cardApi.charAt(39);
  switch (suit) {
    case "H":
      suit = "Hearts";
      break;
    case "D":
      suit = "Diamond";
      break;
    case "C":
      suit = "Clubs";
      break;
    case "S":
      suit = "Spades";
      break;
  }
  return suit;
}

export function findCard(cardApi) {
  let card = cardApi.charAt(38);

  switch (card) {
    case "0":
      card = "Ten";
      break;
    case "2":
      card = "Two";
      break;
    case "3":
      card = "Three";
      break;
    case "4":
      card = "Four";
      break;
    case "5":
      card = "Give";
      break;
    case "6":
      card = "Six";
      break;
    case "7":
      card = "Seven";
      break;
    case "8":
      card = "Eight";
      break;
    case "9":
      card = "Nine";
      break;
    case "J":
      card = "Jack";
      break;
    case "Q":
      card = "Queen";
      break;
    case "K":
      card = "Kind";
      break;
    case "A":
      card = "Ace";
      break;
  }
  return card;
}

export function altImage(cardApi) {
    return findCard(cardApi) + ' of ' + findSuit(cardApi)
  }