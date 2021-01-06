import axios from "axios";
import React, { useState } from "react";

const Login = ({loginUser}) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: data.username,
      password: data.password,
    };

    const newUser = await axios
      .post("http://localhost:4000/login", user)
      .then(res => res.data)
      .catch((e) => console.error(e));

    setData({
        username: "",
        password: "",
    })
    loginUser(newUser);
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleFormSubmit}>
        <h3 className="text-center">Login</h3>
        <input
          name="username"
          placeholder="Username"
          minLength={3}
          required
          onChange={handleInput}
          value={data.username}
        />
        <input
          name="password"
          placeholder="Password"
          minLength={3}
          required
          onChange={handleInput}
          value={data.password}
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
