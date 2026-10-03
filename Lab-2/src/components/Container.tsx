import listings from "../data/data";
import Card from "./Card";

function Container() {
  return (
    <div className="container">
      {listings.map((listing) => (
        <Card key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default Container;