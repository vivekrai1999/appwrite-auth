import React from "react";
import { logout } from "../features/auth/authSlice";
import authService from "../appwrite/auth/auth";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  function handleLogout(e) {
    authService.userLogout();
    dispatch(logout());
  }

  return (
    <div>
      <div>Homepage</div>
      <button onClick={(e) => handleLogout()}>Logout</button>
    </div>
  );
}

export default HomePage;
