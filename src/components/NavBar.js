import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

const NavBarLinks = links.map((link)=>(
  <a key={link} href={`#${link}`}>{link}</a>
))

  return (
  <nav>
    {NavBarLinks}
    {/* display an <a> tag for each link here */}
    </nav>
  ) 
}


export default NavBar;
