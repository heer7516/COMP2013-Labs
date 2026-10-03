import type { ResortListing } from "../data/data";

interface CardProps {
  listing: ResortListing;
}

function Card({ listing }: CardProps) {
  return (
    <div className="card">
      <img src={listing.pic} alt={listing.country} />

      <h2>{listing.country}</h2>

      <p>{listing.location}</p>

      <p className={listing.rating > 4.0 ? "green" : "red"}>
        {listing.rating}★
      </p>

      <p>${listing.price}/night</p>
    </div>
  );
}

export default Card;