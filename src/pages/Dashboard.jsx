import React, { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContextProvider";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome to your dashboard Mr {user.name}</h1>
      <Link
        to={"/dashboard/setting"}
        className="text-gray-500 text-lg pt-4 underline hover:text-blue-500"
      >
        Update Account
      </Link>
    </div>
  );
}

export default Dashboard;
