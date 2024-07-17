import './card.css';

function Card() {
  return (
    <section className="card-container">
      <div className="card-header">
        <h2>SOLD OUT</h2>
      </div>
      <div className="card-body">
        <img src="/image.png" alt="Katie Zaferes" className="card-image" />
      </div>
      <div className="card-footer">
        <p className="footer-text">
          <span className="footer-start">
            <img src="/Star.svg" alt="Star" />
            <small className="rating">5.0</small> <small>(6).</small>
            <small>USA</small>
          </span>
          Life lessons with Katie Zaferes <br />
          <span className="footer-text-bold">From $136 </span>/ person
        </p>
      </div>
    </section>
  );
}
export default Card;
