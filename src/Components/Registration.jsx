import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Registration = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const registered = {
      fullName: data.fullname,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:4000/sign", registered)
      .then((res) => console.log(res.data));

    setData({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleFormSubmit}>
        <h3 className="text-center">Register</h3>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={handleInputChange}
          value={data.fullname}
          minLength={3}
          required
        />
        <input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={data.username}
          minLength={3}
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={data.email}
          minLength={3}
          required
        />
        <input
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={data.password}
          minLength={3}
          required
        />
        <button className="btn btn-success" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
