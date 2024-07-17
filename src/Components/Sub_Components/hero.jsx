import './hero.css';

function Hero() {
  return (
    <section className="demo-container">
      <div className="images-container">
        <img src="/photogrid.png " alt="photo grid image" />
      </div>
      <div className="text-container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
export default Hero;
