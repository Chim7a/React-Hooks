import React from "react";
import PetCard from "./PetCard";

const PetList = (props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto p-2 gap-3">
      {props.petStoreProp.map((item) => {
        return (
          <PetCard
            key={item.pet_id}
            id={item.pet_id}
            name={item.pet_name}
            image={item.pet_photo}
            location={item.pet_location}
            type={item.pet_type}
            race={item.pet_race}
            isAdopted={item.pet_is_adopted}
            handlePetAdoption={props.handlePetAdoption}
          />
        );
      })}
    </div>
  );
};

export default PetList;
