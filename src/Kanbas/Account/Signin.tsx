import * as client from "./client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer"; 

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    } catch (error) {
        console.log(error);
        alert("Invalid username or password");
    }
  };


  return (
    <div id="wd-signin-screen" style={{ width: "400px" }}>
      <h1>Sign In</h1>
      <input
        id="wd-username"
        placeholder="Username"
        type="text"
        className="form-control mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </button>
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="btn btn-secondary w-100"
      >
        Sign up
      </Link>
    </div>
  );
}
