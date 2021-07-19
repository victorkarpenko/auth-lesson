import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {currentUser} from './redux/operations'

function App() {
  const isAuthorized = useSelector(state => state.token)
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if(isAuthorized){
      history.push('/')
    } else{
      history.push('/login')
    }
   
  }, [isAuthorized])

  useEffect(() => {
    dispatch(currentUser());
  }, [])
  return (
    <>
      <Header />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home} /> {//@todo: if user is authorized
            }
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
