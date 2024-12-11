import React from "react";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
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
