import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

function ProtectedLayout() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  if (userLoggedIn === false) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
