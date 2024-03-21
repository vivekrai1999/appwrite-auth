import React, { useState } from "react";
import authService from "../appwrite/auth/auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleFormClick(e) {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    const user = authService.createAccount(data);
    console.log(user);
  }
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
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
        <button type="submit" onClick={(e) => handleFormClick(e)}>
          signup
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
