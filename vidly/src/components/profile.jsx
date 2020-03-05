import React from "react";
import auth from "../services/authServices";

const Profile = props => {
  const user = auth.getCurrentuser();

  return <h1>{user} Profile</h1>;
};

export default Profile;
