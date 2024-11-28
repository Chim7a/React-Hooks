import React, { useState } from "react";
import PetList from "./components/PetList";
import PetData from "./data";

export default function App() {
  const [petStore, setPetStore] = useState(PetData);
  return (
    <>
      <PetList petStoreProp={petStore} />
    </>
  );
}
