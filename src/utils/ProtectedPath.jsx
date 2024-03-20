import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedPath() {
  const userStatus = useSelector((store) => store.auth.status);
  return userStatus ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedPath;
