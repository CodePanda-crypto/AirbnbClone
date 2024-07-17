import './card.css';

function Card() {
  return (
    <section className="card-container">
      <div className="card-header">
        <h2>SOLD OUT</h2>
      </div>
      <div className="card-body">
        <img
          src="/image.png"
          alt="Katie Zaferes photo"
          className="card-image"
        />
      </div>
      <div className="card-footer">
        <div className="card-stats">
          <img src="/Star.svg" alt="Star" />
          <small className="rating">5.0</small>
          <small>(6).</small>
          <small>USA</small>
        </div>
        <h2>Life lessons with Katie Zaferes</h2>
        <p>
          <span className="price">From $136 </span>/ person
        </p>
      </div>
    </section>
  );
}
export default Card;
