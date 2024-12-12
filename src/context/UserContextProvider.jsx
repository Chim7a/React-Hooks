import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  // we intend to make this user state globally accesible by any component.
  const [user, setUser] = useState({
    name: "Chima Ikegbulam",
    age: 30,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
