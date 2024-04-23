import React from "react";

function NavBar() {
  // update the JSX being returned!
  const NavElement = (
    <nav id="x">
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  )
  return (
  <>{NavElement}</>
)
}

export default NavBar;
