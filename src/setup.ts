import card1 from './img/cap.jpg';
import card2 from './img/doom.jpg';
import card3 from './img/hulk.jpg';
import card4 from './img/ironman.jpg';
import card5 from './img/pant.jpg';
import card6 from './img/thor.jpg';
import card7 from './img/venom.jpg';
import card8 from './img/wolverine.jpg';

import cardBack from './img/marvel.jpg';

export type CardType = {
	id: string;
	flipped: boolean;
	backImage: string;
	frontImage: string;
	clickable: boolean;
	matchingCardId: string;
};

const cards: string[] =[card1, card2, card3, card4, card5, card6, card7, card8]

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));