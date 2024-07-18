import './card.css';

export default function Card({
  title,
  img,
  rating,
  views,
  country,
  description,
  price,
}) {
  return (
    <section className="card-container">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <img src={img} alt={description} className="card-image" />
      </div>
      <div className="card-footer">
        <div className="card-stats">
          <img src="/Star.svg" alt="Star" />
          <small className="rating">{rating}</small>
          <small>{views}</small>
          <small>{country}</small>
        </div>
        <h2>{description}</h2>
        <p>
          <span className="price">{price} </span>/ person
        </p>
      </div>
    </section>
  );
}
