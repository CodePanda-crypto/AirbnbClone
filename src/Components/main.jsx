import './main.css';
import Hero from './Sub_Components/hero';
import Card from './Sub_Components/card';
import CardData from './cardData';

export default function Main() {
  const cards = CardData.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      img={card.img}
      rating={card.rating}
      reviewCount={card.reviewCount}
      country={card.country}
      description={card.description}
      price={card.price}
    />
  ));

  return (
    <main className="main-container">
      <Hero />
      {cards}
    </main>
  );
}
