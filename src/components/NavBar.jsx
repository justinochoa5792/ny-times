import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <img src="../images/ny.png" alt="ny time logo" />
      </Link>
    </div>
  );
};

export default NavBar;
