import { useEffect, useState } from "react";
import axios from "../axios";
import PetCard from "../components/PetCard";
import "../styles/pages/Home.css";

function Home() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get("/pets");
        setPets(res.data);
      } catch (error) {
        console.error("Failed to fetch pets:", error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div className="home">
      <div className="pets-grid">
        {pets.length > 0 ? (
          pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <p>No pets</p>
        )}
      </div>
    </div>
  );
}
export default Home;
