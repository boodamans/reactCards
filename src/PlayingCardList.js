import React from 'react';
import { useAxios } from './hooks'; // Import the custom hook
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';

function CardTable() {
  const [card, addCard] = useAxios(
    "card",
    'https://deckofcardsapi.com/api/deck/new/draw/'
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {card.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
