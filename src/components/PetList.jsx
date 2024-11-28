import React from "react";
import PetCard from "./PetCard";

const PetList = (props) => {
  return (
    <div>
      {props.petStoreProp.map((item) => {
        return (
          <PetCard
            key={item.pet_id}
            name={item.pet_name}
            image={item.pet_photo}
          />
        );
      })}
      <PetCard />
    </div>
  );
};

export default PetList;
