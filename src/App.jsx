import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UI from "./components/UI";

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
      <UI />
    </UserContextProvider>
  );
};

export default App;
