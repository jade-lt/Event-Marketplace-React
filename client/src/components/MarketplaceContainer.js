import React, { useState } from "react";
import { DashboardContainer } from "./DashboardContainer";
import { UserLogin } from "./UserLogin";
import { AddUserForm } from "./UserRegister";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";

const MarketplaceContainer = () => {

  const [users, setUsers] = useState([]);
  // const [userData, setUserData] = useState({
  //   username: "",
  //   password: "",
  // })
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("")


  // const handleUserLoginFormSubmit = (username, password) => {
  //   console.log("user login button was clicked")
  //    setUserData = {
  //     username: username.value,
  //     password: password.value,
  //   };
    
  //   // const testUsers = [...users];
  //   // testUsers.push(userLogin);
  //   // setUsers(testUsers);

  //   fetch("http://localhost:9000/api/user/login", {
  //     method: "POST",
  //     headers: {
  //       // "url": "/api/user/login",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   })
  // };



  const handleAddUserFormSubmit = (username, password) => {
    console.log("the add user button was clicked")
    const newUser = {
      username: username,
      password: password,
    };

    const newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);

    fetch("http://localhost:9000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
  });

};


  return (
    <div>
      <div id="header">
      <h1 className="header-text">The Event Marketplace</h1>
      </div>
      
      <Router>
        <div className="">
        
          <Link to="/login">
            {/* <button type="button">Login</button> */}
            <Button variant="outline-info" className="mr-2">Login</Button>
            </Link>
          <Link to="/register">
          {/* <button type="button">Register</button> */}
          <Button variant="outline-info" className="mr-2">Register</Button>

          </Link>
          <Link to="dashboard">
          {/* <button type="button">Dashboard</button> */}
          <Button variant="outline-info" className="mr-2">Dashboard</Button>

          </Link>
          <Switch>
            <Route path="/login">
              <UserLogin />
            </Route>
            <Route path="/register">
              <AddUserForm submit={handleAddUserFormSubmit}/>
            </Route>
            <Route path="/dashboard">
              <DashboardContainer />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
  );

}

export { MarketplaceContainer };
