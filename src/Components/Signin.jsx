import React from "react";
import "./Signin.css";
import { MdAccountCircle, MdLock } from "react-icons/md";

export default function Signin() {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <label>
            <MdAccountCircle /> Username
          </label>
          <input type="text" name="username" required />
        </div>
        <div className="form-group">
          <label>
            <MdLock /> Password
          </label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
