import React, { useState } from "react";
import { Button, Modal, Input, Select, message } from "antd";

const AddPet = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [PetData, setPetData] = useState({
    pet_id: "",
    pet_name: null,
    pet_race: null,
    pet_location: null,
    pet_type: null,
    pet_is_adopted: false,
    pet_photo: null,
  });

  const errorAlert = (error_msg) => {
    messageApi.open({
      type: "error",
      content: error_msg,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (PetData.pet_name === null) {
      return errorAlert("Please enter pet name");
    }
    if (PetData.pet_location === null) {
      return errorAlert("Please enter pet location");
    }
    if (PetData.pet_photo === null) {
      return errorAlert("Please enter pet photo");
    }
    if (PetData.pet_race === null) {
      return errorAlert("Please enter pet race");
    }
    if (PetData.pet_type === null) {
      return errorAlert("Please enter pet type");
    }

    // Alternative to if statement.
    // for (const key in PetData) {
    //   if (Object.prototype.hasOwnProperty.call(PetData, key)) {
    //     if (PetData[key] === null) {
    //       return errorAlert(`Please enter ${key}`.replaceAll("_", " "));
    //     }
    //   }
    // }

    // This will generate a random ID and pass to PetData
    const PET_INFO = { ...PetData, pet_id: Date.now() };
    props.handleAddNewPet(PET_INFO);

    //  This will clear all the input fields text and return to default. You also would have to pass in
    //  value={petData.key(eg, .pet_name)} in each of the inputs or select forms
    setPetData({
      pet_id: "",
      pet_name: null,
      pet_race: null,
      pet_location: null,
      pet_type: null,
      pet_is_adopted: false,
      pet_photo: null,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Add new pet
      </Button>
      <Modal
        title="Pet Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="grid gap-2">
          <Input
            value={PetData.pet_name}
            onChange={(event) =>
              setPetData({ ...PetData, pet_name: event.target.value })
            }
            size="large"
            placeholder="Enter Pet Name"
          />
          <Input
            value={PetData.pet_photo}
            onChange={(e) =>
              setPetData({ ...PetData, pet_photo: e.target.value })
            }
            size="large"
            placeholder="Enter Image Link"
          />
          <Select
            value={PetData.pet_location}
            size="large"
            defaultValue="Pet Location"
            style={{
              width: 220,
            }}
            onChange={(value) => {
              setPetData({ ...PetData, pet_location: value });
            }}
            options={[
              {
                value: "Abuja",
                label: "Abuja",
              },
              {
                value: "Lagos",
                label: "Lagos",
              },
            ]}
          />
          <Select
            value={PetData.pet_type}
            size="large"
            defaultValue="Pet gender"
            style={{
              width: 220,
            }}
            onChange={(value) => setPetData({ ...PetData, pet_type: value })}
            options={[
              {
                value: "female",
                label: "female",
              },
              {
                value: "male",
                label: "male",
              },
            ]}
          />
          <Select
            value={PetData.pet_race}
            size="large"
            defaultValue="Pet Race"
            style={{
              width: 220,
            }}
            onChange={(value) => setPetData({ ...PetData, pet_race: value })}
            options={[
              {
                value: "german shepherd",
                label: "german shepherd",
              },
              {
                value: "Eskimo",
                label: "Eskimo",
              },
            ]}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddPet;
