import React, { useState, useEffect, useContext } from "react";
import {UserContext} from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div> please login </div>;
  return <div>hello {user.username}</div>;
};

export default Profile;
