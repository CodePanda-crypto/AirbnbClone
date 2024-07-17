import './card.css';

export default function Card(props) {
  return (
    <section className="card-container">
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="card-body">
        <img src={props.img} alt={props.description} className="card-image" />
      </div>
      <div className="card-footer">
        <div className="card-stats">
          <img src="/Star.svg" alt="Star" />
          <small className="rating">{props.rating}</small>
          <small>{props.views}</small>
          <small>{props.country}</small>
        </div>
        <h2>{props.description}</h2>
        <p>
          <span className="price">{props.price} </span>/ person
        </p>
      </div>
    </section>
  );
}
