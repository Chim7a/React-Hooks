import React, { useState, useContext, useMemo } from "react";
import PetList from "../components/PetList";
import PetData from "../data";
import { Select } from "antd";
import AddPet from "../components/AddPet";
import { UserContext } from "../context/UserContextProvider";

function MarketPlace() {
  const [petStore, setPetStore] = useState(PetData);
  const { user } = useContext(UserContext);
  const [AddPetDep, setAddPetDep] = useState(null);

  // Usememo to store the value of the variable stored in Pestore.
  // Added "AddPetDep" pet is stored as a dependency to allow for new pets to added to its original value.
  // This is called inside the handleAddNewPet function
  const petStorage = useMemo(() => {
    return petStore;
  }, [AddPetDep]);

  // *****
  const handlePetLocationFilter = (value) => {
    switch (value) {
      case "Abuja":
        {
          const dogsInAbuja = petStorage.filter(
            (item) => item.pet_location === value
          );
          setPetStore(dogsInAbuja);
        }

        break;
      case "Lagos":
        {
          const dogsInLagos = petStorage.filter(
            (item) => item.pet_location === value
          );
          setPetStore(dogsInLagos);
        }
        break;

      case "All": {
        setPetStore(petStorage);
      }
      default:
        break;
    }
  };

  const handlePetTypeFilter = (value) => {
    switch (value) {
      case "male":
        {
          const maleDogs = PetData.filter((item) => item.pet_type === value);
          setPetStore(maleDogs);
        }

        break;
      case "female":
        {
          const femaleDogs = PetData.filter((item) => item.pet_type === value);
          setPetStore(femaleDogs);
        }
        break;

      case "All": {
        setPetStore(PetData);
      }
      default:
        break;
    }
  };

  const handlePetAdoption = (id) => {
    console.log(id);

    const updateStore = petStore.map((item) => {
      if (item.pet_id === id) {
        item.pet_is_adopted = true;
      }
      return item;
    });

    setPetStore(updateStore);
  };

  const handleAddNewPet = (pet_info) => {
    // console.log("Recieved in App.jsx from AddPet", pet_info);
    // When a new pet is added, it is then sent to the memo with setAddPetDep(pet_info);
    setAddPetDep(pet_info);
    setPetStore([pet_info, ...petStore]);
  };
  return (
    <>
      <section className="container mx-auto my-4">
        <Select
          defaultValue="Filter Gender"
          style={{
            width: 220,
          }}
          onChange={handlePetLocationFilter}
          options={[
            {
              value: "Abuja",
              label: "Abuja",
            },
            {
              value: "Lagos",
              label: "Lagos",
            },
            {
              value: "All",
              label: "All",
            },
          ]}
        />
        <Select
          defaultValue="Filter Location"
          style={{
            width: 220,
          }}
          onChange={handlePetTypeFilter}
          options={[
            {
              value: "female",
              label: "female",
            },
            {
              value: "male",
              label: "male",
            },
            {
              value: "All",
              label: "All",
            },
          ]}
        />
      </section>
      <div className="container mx-auto">
        <h1>
          Hi my name is {user.name} and i'm {user.age} years of age.
        </h1>
        <AddPet handleAddNewPet={handleAddNewPet} />
      </div>
      <PetList petStoreProp={petStore} handlePetAdoption={handlePetAdoption} />
    </>
  );
}

export default MarketPlace;
