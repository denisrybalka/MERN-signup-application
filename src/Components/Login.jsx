import React, { useState } from "react";
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader';

const Login = ({ loginUser }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const user = {
      username: data.username,
      password: data.password,
    };

    const newUser = await axios
      .post("http://localhost:4000/login", user)
      .then(res => {
        setError(null);
        return res.data;
      })
      .catch((e) => setError(e.response.data.message))
      .finally(() => setLoading(false));

    loginUser(newUser);
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleFormSubmit}>
        <h3 className="text-center">Login</h3>
        <p className="text-center" style={{ color: "#dc3545" }}>{error && `${error}`}</p>
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
          type="password"
          minLength={3}
          required
          onChange={handleInput}
          value={data.password}
        />
        <button className="btn btn-success" type="submit" disabled={loading}>
          {loading ? <ClipLoader loading={loading} color={"white"} /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
