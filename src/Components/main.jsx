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
        views="(25)."
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
        img="/travel.jpg"
        rating="4.9"
        views="(35)."
        country="USA"
        description="Explore the World with us"
        price="From $500"
      />
      <Card
        title="ONLINE"
        img="/group-hiking.jpg"
        rating="5.0"
        views="(30)."
        country="USA"
        description="Join Group Hiking"
        price="From $125"
      />
      <Card
        title="Favorite"
        img="/Nature.jpg"
        rating="5.0"
        views="(45)."
        country="Austria"
        description="Take a spin around the world"
        price="From $400"
      />
    </main>
  );
}
