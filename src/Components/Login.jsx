import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="card">
        <h3 className="text-center">Login</h3>
        <input
          name="username"
          placeholder="Username"
          minLength={3}
          required
        />
        <input
          name="password"
          placeholder="Password"
          minLength={3}
          required
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
