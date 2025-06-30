import { Link } from "react-router-dom";
import "../styles/PetCard.css";

function PetCard({ pet }) {
  return (
    <div className="petCard">
      <div className="petCard-image">
        <img src={pet.image} alt={pet.name + pet.breed} />
      </div>
      <div className="petCard-description">
        <h3 className="pet_Name">{pet.name}</h3>
        <p className="pet_Breed">Breed: {pet.breed}</p>
        <p className="pet_Price">INR ₹{pet.price}</p>

        <Link to={`/buy/${pet.id}`} className="buy-btn">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
export default PetCard;
