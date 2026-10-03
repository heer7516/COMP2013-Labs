import type { ResortListing } from "../data/data";

export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price
}: ResortListing) {
  return (
    <div className="card">
      <img src={pic} alt={country} />

      <h2>{country}</h2>

      <p>{location}</p>

      <p style={{ color: rating > 4.0 ? "green" : "red" }}>
        {rating}★
      </p>

      <p>${price}/night</p>
    </div>
  );
}