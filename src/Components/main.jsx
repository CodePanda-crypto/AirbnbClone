import './main.css';
import Hero from './Sub_Components/hero';
import Card from './Sub_Components/card';
import CardData from './cardData';

export default function Main() {
  const cards = CardData.map((card) => (
    <Card
      key={card.id}
      statusbar={card.statusbar}
      img={card.coverImage}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
    />
  ));

  return (
    <main className="main-container">
      <Hero />
      <section className="cards-list">{cards}</section>
    </main>
  );
}
