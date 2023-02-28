import Flashcard from "./Flashcard";

export default function Deck({cards, increaseDoneCards}) {
  return (
    <div className="Deck">
      {cards.map((c, i) => (
        <Flashcard card = {c} numero={i} increaseDoneCards={increaseDoneCards}/>
      ))}
    </div>
  );
}
