import React from "react";
import {
    BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import { Router } from 'react-router'
import { makeStyles } from '@mui/styles';
import HomePage from '../Pages/HomePage'
import Header from '../Pages/Header/Header'
import { PrivateRoute } from "./PrivateRoute";

function Routes() {
  console.log("check login");
  localStorage.setItem("Home",true)
  return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" />
          <Route component={HeaderRoutes} />
        </Switch>
      </Router>
  );
}
export default Routes;
const HeaderRoutes = () => {
  console.log("check");
  const isAccess = localStorage.getItem("Home");
  return (
    <React.Fragment>
      {isAccess ?(
         <div>
         <header>
           <Header/>
         </header>
         <main>
             <Switch>
                 <Route path="/Home" component={HomePage}/>
             </Switch>
         </main>
       </div>
       ):
      (
        <PrivateRoute exact path="/" />
      )} 
    </React.Fragment>
  );
};
