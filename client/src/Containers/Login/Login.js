import React from "react";
import { loginUser } from "../../redux/operations";
import "./Login.css";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="off"
        />
      </div>

      <button type="button" onClick={onSubmit} className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default Login;
