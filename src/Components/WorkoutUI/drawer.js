import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "flwww";
import Logout from "../../Pages/LogOut";

const DrawerComp = props => {
  const { toggleDrawer } = props;
  //---------------------------------------------------------------------
  /* # HERE YOU WRITE YOUR UN-AUHTETICATED LINKS */
  let AuthNavLink = (
    <>
      <NavLink
        exact
        to="/login"
        activeClassName="active-links"
        onClick={toggleDrawer}
      >
        LOG IN
      </NavLink>
      <NavLink
        exact
        to="/register"
        activeClassName="active-links"
        onClick={toggleDrawer}
      >
        REGISTER
      </NavLink>
    </>
  );
  //---------------------------------------------------------------------
  if (props.authenticated) {
    AuthNavLink = (
      //---------------------------------------------------------------------
      /* # HERE YOU WRITE YOUR UN-AUHTETICATED LINKS */
      <>
        <NavLink
          exact
          to="/profile"
          activeClassName="active-links"
          onClick={toggleDrawer}
        >
          PROFILE
        </NavLink>
        <NavLink
          exact
          to="/workouts"
          activeClassName="active-links"
          onClick={toggleDrawer}
        >
          WORKOUTS
        </NavLink>
        <NavLink
          exact
          to="/nutrition"
          activeClassName="active-links"
          onClick={toggleDrawer}
        >
          NUTRITION
        </NavLink>
        <Logout />
      </>
      //---------------------------------------------------------------------
    );
  }
  return (
    <Drawer
      showDrawer={props.drawerIsVisible}
      toggleDrawer={props.toggleDrawer}
      style={{ overflow: "hidden" }}
    >
      <h3>MissionSlimPossible</h3>
      <nav className="Drawer-Links-wrapper">{AuthNavLink}</nav>
    </Drawer>
  );
};

export default DrawerComp;
