import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PetData from "../data";

function PetDetails() {
  const [petInfo, setPetInfo] = useState(null);
  const params = useParams();

  const getPetDetails = () => {
    const pet = PetData.find((item) => item.pet_id === Number(params.pet_id));
    setPetInfo(pet);
  };
  useEffect(() => {
    getPetDetails();
  }, []);

  if (petInfo === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mx-auto">
      <h1>{petInfo.pet_name}</h1>
      <p>{petInfo.pet_description}</p>
      <p>{petInfo.pet_type}</p>
      <p>{petInfo.pet_location}</p>
    </div>
  );
}

export default PetDetails;
