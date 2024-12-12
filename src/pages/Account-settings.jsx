import React, { useState, useContext } from "react";
import { Input, Button } from "antd";
import { UserContext } from "../context/UserContextProvider";

function AccountSettings() {
  const [nameValue, setNameValue] = useState("");
  const { setUser, user } = useContext(UserContext);

  const handleNameUpdate = () => {
    setUser((preValue) => ({ ...preValue, name: nameValue }));
  };
  return (
    <section className="container mx-auto">
      <h1>Update your account information here</h1>
      <div className="my-3">
        <h1 className="text-lg font-semibold">Name: {user.name}</h1>
        <h2 className="text-lg font-semibold">Age: {user.age}</h2>
      </div>
      <div className="max-w-96 gap-3 grid">
        <Input
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Enter new name"
        />
        <Button type="primary" onClick={handleNameUpdate}>
          Change Name
        </Button>
      </div>
    </section>
  );
}

export default AccountSettings;
