import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations";
import './Logout.css'
const Logout = () => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const userName = useSelector(s => s?.user?.name);

  return (
    <div className="LogoutBtnContainer">
      {
        userName &&
        <span className="LogoutBtnContainer__userName">
          {userName}
        </span>
      }
      <button type="button" onClick={onClick} className="btn btn-primary btn-block">
        Log out
      </button>
    </div>
  );
};

export default Logout;
