import React, {useState} from "react";
import { loginUser } from "../../redux/operations";
import { useDispatch } from "react-redux";
import "./Login.css";

const initialFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialFormState);

  const inputHandler = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm({ ...form, [name]: value });
  };

  const dispatch = useDispatch();
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
          value={form.email}
          name='email'
          onChange={inputHandler}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="off"
          value={form.password}
          name='password'
          onChange={inputHandler}
        />
      </div>

      <button type="button" onClick={onSubmit} className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default Login;
