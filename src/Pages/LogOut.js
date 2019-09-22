import React from "react";
import firebase from "../firebase";
import { Button, Icon } from "antd";

const logOutUser = () => {
  firebase.auth().signOut();
};
// <button className="outbutton"  onClick={logOutUser}  />
const LogOut = () => {
  return (
    <Button type="primary" onClick={logOutUser}>
      <Icon type="logout" style={{ verticalAlign: "0.125em" }} />
      Logout
    </Button>
  );
};

export default LogOut;
