import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FaUser /> Name
          </label>
          <input
            type="text"
            name="name"
            className="input-signup"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            name="email"
            className="input-signup"
            value={formData.email}
            onChange={handleInputChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        <div className="form-group">
          <label>
            <FaLock /> Password
          </label>
          <input
            type="password"
            name="password"
            className="input-signup"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FaLock /> Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="input-signup"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">
          <FaUserPlus /> Sign Up
        </button>
      </form>
    </div>
  );
}
