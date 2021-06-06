import React from "react";

var currYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>cpoyright @ {currYear}</p>
    </footer>
  );
}
export default Footer;
