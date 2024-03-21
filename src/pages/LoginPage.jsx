import React, { useEffect, useState } from "react";
import authService from "../appwrite/auth/auth";
import { login, setUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((store) => store.auth.status);

  async function handleFormClick(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const user = await authService.userLogin(data);
    if (user) {
      dispatch(login(user));
      navigate("/");
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
        />
        <button type="submit" onClick={(e) => handleFormClick(e)}>
          login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
