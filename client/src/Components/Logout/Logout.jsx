import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/operations";
const Login = () => {
  const dispatch = useDispatch();
  
  const onClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <button type="button" onClick={onClick} className="btn btn-primary btn-block">
        Log out
    </button>
  );
};

export default Login;
