import './card.css';

export default function Card({
  statusbar,
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <section className="card-container">
      <div className="card-header">
        <h2>{statusbar}</h2>
      </div>
      <div className="card-body">
        <img src={img} alt={title} className="card-image" />
      </div>
      <div className="card-footer">
        <div className="card-stats">
          <img src="/svgs/Star.svg" alt="Star" />
          <small className="rating">{rating}</small>
          <small>({reviewCount}). </small>
          <small>{location}</small>
        </div>
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <p>
            <span className="price">From ${price} </span>/ person
          </p>
        </div>
      </div>
    </section>
  );
}
