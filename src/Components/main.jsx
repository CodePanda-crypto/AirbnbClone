import './main.css';
import Hero from './Sub_Components/hero';
import Card from './Sub_Components/card';

export default function Main() {
  return (
    <main className="main-container">
      <Hero />
      <Card
        title="ONLINE"
        img="/Mountain-Bike.png"
        rating="4.8"
        views="(2)."
        country="USA"
        description="Join Group Mountain Biking"
        price="From $100"
      />
      <Card
        title="SOLD OUT"
        img="/image.png"
        rating="5.0"
        views="(6)."
        country="USA"
        description="Life lessons with Katie Zaferes"
        price="From $136"
      />
      <Card
        title="ONLINE"
        img="/wedding-photography.png"
        rating="5.0"
        views="(30)."
        country="USA"
        description="Learn wedding photography"
        price="From $125"
      />
      <Card
        title="JOIN NOW"
        img="/mountain-bike.jpg"
        rating="4.8"
        views="(2)."
        country="USA"
        description="Join Group Mountain Biking"
        price="From $50"
      />
      <Card
        title="ONLINE"
        img="/wedding-photography.png"
        rating="5.0"
        views="(30)."
        country="USA"
        description="Learn wedding photography"
        price="From $125"
      />
      <Card
        title="SOLD OUT"
        img="/image.png"
        rating="5.0"
        views="(6)."
        country="USA"
        description="Life lessons with Katie Zaferes"
        price="From $136"
      />
    </main>
  );
}
